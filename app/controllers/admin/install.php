<?php

class Admin_InstallController extends Trails_Controller
{
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
                'files' => false,
                'root' => false,
                'env' => 'development',
            ];
        }

        $this->installer = new StudipInstaller($GLOBALS['STUDIP_BASE_PATH']);
        $this->checker   = new SystemChecker($GLOBALS['STUDIP_BASE_PATH']);

        parent::before_filter($action, $args);

        $this->set_layout('admin/install/layout');

        $this->steps = [
            'index'       => 'Einleitung',
            'php_check'   => 'System-Check (PHP)',
            'mysql'       => 'Datenbank konfigurieren',
            'mysql_check' => 'System-Check (Datenbank)',
            'permissions' => 'Berechtigungen',
            'prepare'     => 'Konfiguration',
            'install'     => 'Installation',
            'migrate'     => 'Migration',
        ];
        $steps = array_keys($this->steps);
        $step  = array_search($action, $steps) ?: 0;

        $this->previous_step = $step > 0 ? $steps[$step - 1] : false;
        $this->step          = $steps[$step];
        $this->next_step     = $step + 1 < count($steps) ? $steps[$step + 1] : false;

        $this->valid = true;
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

        $this->valid = false;
        if (Request::submitted('continue')) {
            $files = array_intersect(
                array_keys($this->files),
                Request::getArray('files')
            );

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

            $_SESSION['STUDIP_INSTALLATION']['files'] = $files;
            $_SESSION['STUDIP_INSTALLATION']['root'] = compact(
                'username', 'password', 'email', 'first_name', 'last_name'
            );
            $_SESSION['STUDIP_INSTALLATION']['env'] = Request::option('env') === 'production'
                                                    ? 'production'
                                                    : 'development';
        }

        $this->button_label = 'Installieren';
    }

    public function install_action()
    {
        // echo '<pre>';var_dump($_SESSION['STUDIP_INSTALLATION']);die;

        // INSTALL SQL FILES
        $pdo = $this->checker->checkMySQLConnection(
            $_SESSION['STUDIP_INSTALLATION']['database']['host'],
            $_SESSION['STUDIP_INSTALLATION']['database']['user'],
            $_SESSION['STUDIP_INSTALLATION']['database']['password'],
            $_SESSION['STUDIP_INSTALLATION']['database']['database']
        );
        $pdo->exec('SET NAMES utf8');

        foreach ($_SESSION['STUDIP_INSTALLATION']['files'] as $file) {
            $queries = explode(';', file_get_contents($GLOBALS['STUDIP_BASE_PATH'] . '/db/' . $file));
            foreach ($queries as $query) {
                $pdo->exec($query);
            }
        }

        // CREATE ROOT USER
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

        // COPY config.inc.php / config_local.inc.php
        $local_inc = $this->installer->createConfigLocalInc(
            $_SESSION['STUDIP_INSTALLATION']['database']['host'],
            $_SESSION['STUDIP_INSTALLATION']['database']['user'],
            $_SESSION['STUDIP_INSTALLATION']['database']['password'],
            $_SESSION['STUDIP_INSTALLATION']['database']['database'],

            $_SESSION['STUDIP_INSTALLATION']['env']
        );
        if (is_writable($GLOBALS['STUDIP_BASE_PATH'] . '/config')) {
            file_put_contents(
                $GLOBALS['STUDIP_BASE_PATH'] . '/config/config_local.inc.php',
                $local_inc
            );

            $this->local_inc = true;
        } else {
            $this->local_inc = $local_inc;
        }
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
            header('Location: ' . $this->url_for('admin/install', $this->next_step));
            page_close();
            die;
        }
    }

    public function link_for($to)
    {
        return htmlReady(call_user_func_array([$this, 'url_for'], func_get_args()));
    }
}