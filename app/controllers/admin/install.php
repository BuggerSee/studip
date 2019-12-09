<?php
class Admin_InstallController extends Trails_Controller
{
    public function __construct($dispatcher)
    {
        if (basename($dispatcher->trails_uri, '.php') !== 'install') {
            throw new AccessDeniedException();
        }

        parent::__construct($dispatcher);
    }

    public function before_filter(&$action, &$args)
    {
        if (!isset($_SESSION['STUDIP_INSTALLATION'])) {
            $_SESSION['STUDIP_INSTALLATION'] = [
                'database' => [
                    'host'     => 'localhost',
                    'user'     => '',
                    'password' => '',
                    'database' => 'studip',
                    'version'  => false,
                ],
                'files'  => false,
                'root'   => false,
                'system' => false,
                'env'    => 'development',
            ];
        }

        $this->installer = new StudipInstaller($GLOBALS['STUDIP_BASE_PATH']);
        $this->checker   = new SystemChecker($GLOBALS['STUDIP_BASE_PATH']);

        $this->basic = Request::submitted('basic');
        if ($this->basic) {
            URLHelper::addLinkParam('basic', 1);
        }

        parent::before_filter($action, $args);

        $this->set_layout('admin/install/layout');

        $this->steps = [
            'index'       => 'Einleitung',
            'php_check'   => 'System-Check (PHP)',
            'mysql'       => 'Datenbank konfigurieren',
            'mysql_check' => 'System-Check (Datenbank)',
            'permissions' => 'Berechtigungen',
            'prepare'     => 'Konfiguration',
            'root'        => 'Root-Konto',
            'install'     => 'Installation',
            'finish'      => 'Installation beendet',
        ];
        $steps = array_keys($this->steps);
        $step  = array_search($action, $steps) ?: 0;

        $this->previous_step = $step > 0 ? $steps[$step - 1] : false;
        $this->step          = $steps[$step];
        $this->next_step     = $step + 1 < count($steps) ? $steps[$step + 1] : false;

        $this->total_steps  = count($this->steps);
        $this->current_step = $step + 1;

        $this->valid = true;
        $this->hide_back_button = false;
    }

    public function index_action()
    {
    }

    public function php_check_action()
    {
        $this->result = $this->checker->checkPHPRequirements();
        $this->valid = $this->result['valid'];
    }

    public function mysql_action()
    {
        $this->valid = false;
        if (Request::submitted('continue')) {
            $host     = Request::get('host');
            $user     = Request::get('user');
            $password = Request::get('password');
            $database = Request::get('database');

            try {
                $this->result = $this->checker->checkMySQLConnection(
                    $host, $user, $password, $database
                );
                $this->valid = true;

                $_SESSION['STUDIP_INSTALLATION']['database'] = compact(
                    'host', 'user', 'password', 'database'
                );
            } catch (Exception $e) {
                $this->valid = false;

                $this->error = $e->getMessage();
            }
        }
    }

    public function mysql_check_action()
    {
        $this->result = $this->checker->checkMySQLRequirements(
            $_SESSION['STUDIP_INSTALLATION']['database']['host'],
            $_SESSION['STUDIP_INSTALLATION']['database']['user'],
            $_SESSION['STUDIP_INSTALLATION']['database']['password'],
            $_SESSION['STUDIP_INSTALLATION']['database']['database']
        );
        $this->valid = $this->result['valid'];
    }

    public function permissions_action()
    {
        $this->writable = $this->checker->checkPermissions();
        $this->valid = array_sum($this->writable) === count($this->writable);
    }

    public function prepare_action()
    {
        $this->files = [
            'studip.sql' => 'Datenbankschema',
            'studip_default_data.sql' => 'Voreinstellungen',
            'studip_resources_default_data.sql' => 'Struktur für die Ressourcen',
            'studip_demo_data.sql' => 'Beispieldaten',
            'studip_mvv_demo_data.sql' => 'Beispieldaten',
            'studip_resources_demo_data.sql' => 'Beispieldaten',
        ];
        $this->required = [
            'studip.sql',
            'studip_default_data.sql',
            'studip_resources_default_data.sql',
        ];

        if (Request::submitted('continue')) {
            $_SESSION['STUDIP_INSTALLATION']['files'] = array_intersect(
                array_keys($this->files),
                Request::getArray('files')
            );
            $_SESSION['STUDIP_INSTALLATION']['env'] = Request::option('env') === 'production'
                                                    ? 'production'
                                                    : 'development';

            $_SESSION['STUDIP_INSTALLATION']['system'] = [
                'UNI_NAME_CLEAN'         => Request::get('system_name'),
                'STUDIP_INSTALLATION_ID' => Request::get('system_id'),
                'ABSOLUTE_URI_STUDIP'    => Request::get('system_url'),
                'UNI_CONTACT'            => Request::get('system_email'),
                'UNI_URL'                => Request::get('system_host_url'),
            ];
        }
    }

    public function root_action()
    {
        $this->valid = false;
        if (Request::submitted('continue')) {
            $username = Request::get('username');
            $password = Request::get('password');
            $confirm  = Request::get('password_confirm');
            $email    = Request::get('email');
            $first_name = Request::get('first_name');
            $last_name = Request::get('last_name');

            $errors = [];

            if (!preg_match(StudipInstaller::USERNAME_REGEX, $username)) {
                $errors[] = 'Der Benutzername ist ungültig';
            }

            if (!preg_match(StudipInstaller::PASSWORD_REGEX, $password)) {
                $errors[] = 'Das Passwort ist zu kurz oder ungültig. Es muss mindestens 8 Zeichen lang sein.';
            } elseif ($password !== $confirm) {
                $errors[] = 'Die Passwörter stimmen nicht überein.';
            }

            if (count($errors) === 0) {
                $this->valid = true;
            } else {
                $this->error = count($errors) === 1
                             ? $errors[0]
                             : '<ul><li>' . implode('</li><li>', $errors) . '</li></ul>';
            }

            $_SESSION['STUDIP_INSTALLATION']['root'] = compact(
                'username', 'password', 'email', 'first_name', 'last_name'
            );
        }

        $this->button_label = 'Installieren';
    }

    public function install_action($what = null)
    {
        $pdo = $this->checker->checkMySQLConnection(
            $_SESSION['STUDIP_INSTALLATION']['database']['host'],
            $_SESSION['STUDIP_INSTALLATION']['database']['user'],
            $_SESSION['STUDIP_INSTALLATION']['database']['password'],
            $_SESSION['STUDIP_INSTALLATION']['database']['database']
        );
        $pdo->exec('SET NAMES utf8');

        // INSTALL SQL FILES
        if ($this->basic || $what === 'sql') {
            if (Request::submitted('evts')) {
                $this->installDatabaseEventSource(
                    $pdo,
                    $_SESSION['STUDIP_INSTALLATION']['files']
                );
            } else {
                try {
                    foreach ($_SESSION['STUDIP_INSTALLATION']['files'] as $file) {
                        $queries = explode(';', file_get_contents($GLOBALS['STUDIP_BASE_PATH'] . '/db/' . $file));
                        foreach ($queries as $query) {
                            $pdo->exec($query);
                        }
                    }

                    if (!$this->basic) {
                        $this->render_json(true);
                    }
                } catch (Exception $e) {
                    if ($this->basic) {
                        throw $e;
                    } else {
                        $this->set_status(500);
                        $this->render_json($e->getMessage());
                    }
                }
            }
        }
        // CREATE ROOT USER
        if ($this->basic || $what === 'root') {
            try {
                $user_id = md5(uniqid('root-user', true));
                $hasher  = new PasswordHash(8, false);

                $query = "INSERT INTO `auth_user_md5` (
                            `user_id`, `username`, `password`, `perms`,
                            `Vorname`, `Nachname`, `Email`, `auth_plugin`,
                            `locked`, `lock_comment`, `locked_by`,
                            `visible`
                          ) VALUES (
                            :user_id, :username, :password, 'root',
                            :first_name, :last_name, :email, 'standard',
                            0, NULL, NULL,
                            'global'
                          )";
                $statement = $pdo->prepare($query);
                $statement->bindValue(':user_id', $user_id);
                $statement->bindValue(':username', $_SESSION['STUDIP_INSTALLATION']['root']['username']);
                $statement->bindValue(':password', $hasher->HashPassword($_SESSION['STUDIP_INSTALLATION']['root']['password']));
                $statement->bindValue(':first_name', $_SESSION['STUDIP_INSTALLATION']['root']['first_name']);
                $statement->bindValue(':last_name', $_SESSION['STUDIP_INSTALLATION']['root']['last_name']);
                $statement->bindValue(':email', $_SESSION['STUDIP_INSTALLATION']['root']['email']);
                $statement->execute();

                $query = "INSERT INTO `user_info` (`user_id`) VALUES (:user_id)";
                $statement = $pdo->prepare($query);
                $statement->bindValue(':user_id', $user_id);
                $statement->execute();

                if (!$this->basic) {
                    $this->render_json(true);
                }
            } catch (Exception $e) {
                if ($this->basic) {
                    throw $e;
                } else {
                    $this->set_status(500);
                    $this->render_json($e->getMessage());
                }
            }
        }

        // COPY config.inc.php / config_local.inc.php
        if ($this->basic || $what === 'config') {
            $local_inc = $this->installer->createConfigLocalInc(
                $_SESSION['STUDIP_INSTALLATION']['database']['host'],
                $_SESSION['STUDIP_INSTALLATION']['database']['user'],
                $_SESSION['STUDIP_INSTALLATION']['database']['password'],
                $_SESSION['STUDIP_INSTALLATION']['database']['database'],

                $_SESSION['STUDIP_INSTALLATION']['env'],
                $_SESSION['STUDIP_INSTALLATION']['system']['ABSOLUTE_URI_STUDIP']
            );
            $config_inc = $this->installer->createConfigInc(
                $_SESSION['STUDIP_INSTALLATION']['system']['UNI_URL'],
                $_SESSION['STUDIP_INSTALLATION']['system']['UNI_CONTACT']
            );

            // Update config entries
            $this->installer->updateConfigInDatabase(
                $pdo,
                'STUDIP_INSTALLATION_ID',
                $_SESSION['STUDIP_INSTALLATION']['system']['STUDIP_INSTALLATION_ID']
            );
            $this->installer->updateConfigInDatabase(
                $pdo,
                'UNI_NAME_CLEAN',
                $_SESSION['STUDIP_INSTALLATION']['system']['UNI_NAME_CLEAN']
            );

            if (is_writable($GLOBALS['STUDIP_BASE_PATH'] . '/config')) {
                file_put_contents(
                    $GLOBALS['STUDIP_BASE_PATH'] . '/config/config_local.inc.php',
                    $local_inc
                );
                file_put_contents(
                    $GLOBALS['STUDIP_BASE_PATH'] . '/config/config.inc.php',
                    $config_inc
                );

                if ($this->basic) {
                    $this->local_inc = true;
                } else {
                    $this->render_json(true);
                }
            } elseif ($this->basic) {
                $this->local_inc  = $local_inc;
                $this->config_inc = $config_inc;
            } else {
                $this->set_status(500);
                $this->render_json(compact('local_inc', 'config_inc'));
            }
        }

        if ($this->basic) {
            $this->render_template('admin/install/install-basic.php', $this->layout);
        }
    }

    public function finish_action()
    {
        if (Request::submitted('continue')) {
            $this->redirect('migrate');
            return;
        }

        $this->valid            = false;
        $this->hide_back_button = true;
        $this->button_label     = 'Zum Stud.IP-System';
    }

    public function migrate_action()
    {
        unset($_SESSION['STUDIP_INSTALLATION']);
        session_destroy();

        header('Location: ' . dirname($_SERVER['SCRIPT_NAME']) . '/web_migrate.php');
        page_close();
        die;
    }

    public function after_filter($action, $args)
    {
        if ($_SERVER['REQUEST_METHOD'] === 'POST' && $this->next_step && $this->valid) {
            header('Location: ' . $this->url_for($this->next_step));
            page_close();
            die;
        }
    }

    public function url_for($to)
    {
        $url = call_user_func_array('parent::url_for', func_get_args());
        return URLHelper::getURL($url);
    }

    public function link_for($to)
    {
        return htmlReady(call_user_func_array([$this, 'url_for'], func_get_args()));
    }

    public function render_json($what)
    {
        $this->set_content_type('application/json');
        $this->render_text(json_encode($what));
    }

    private function installDatabaseEventSource(PDO $pdo, array $files)
    {
        while (ob_get_level()) {
            ob_end_clean();
        }

        header('Cache-Control: no-cache');
        header("Content-Type: text/event-stream\n\n");

        try {
            $total = 0;
            foreach ($files as $file) {
                $total += substr_count(
                    file_get_contents($GLOBALS['STUDIP_BASE_PATH'] . '/db/' . $file),
                    ';'
                );
            }
            $this->sendEventSourceEvent('total', $total);

            $current = 0;
            foreach ($files as $file) {
                $this->sendEventSourceEvent('file', $file);

                $queries = explode(';', file_get_contents($GLOBALS['STUDIP_BASE_PATH'] . '/db/' . $file));
                foreach ($queries as $query) {
                    $pdo->exec($query);
                    $current += 1;

                    $this->sendEventSourceEvent('current', $current);
                }
            }

            $this->sendEventSourceEvent('close', true);
        } catch (Exception $e) {
            $this->sendEventSourceEvent('error', $e->getMessage());
        }

        die;
    }

    private function sendEventSourceEvent($event, $data)
    {
        echo "event: {$event}\n";
        echo "data: {$data}\n";
        echo "\n";
        flush();
    }
}
