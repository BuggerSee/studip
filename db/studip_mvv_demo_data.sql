INSERT INTO `mvv_abschl_kategorie` (`kategorie_id`, `name`, `name_kurz`, `beschreibung`, `position`, `author_id`, `editor_id`, `mkdate`, `chdate`) VALUES('1', 'Bachelor-Abschlüsse', NULL, NULL, 1, '', '', 1545135981, 1545135981);
INSERT INTO `mvv_abschl_kategorie` (`kategorie_id`, `name`, `name_kurz`, `beschreibung`, `position`, `author_id`, `editor_id`, `mkdate`, `chdate`) VALUES('2', 'Master-Abschlüsse', NULL, NULL, 2, '', '', 1545135981, 1545135981);

INSERT INTO `mvv_abschl_zuord` (`abschluss_id`, `kategorie_id`, `position`, `author_id`, `editor_id`, `mkdate`, `chdate`) VALUES('228234544820cdf75db55b42d1ea3ecc', '1', 0, '', '', 1545135981, 1545135981);
INSERT INTO `mvv_abschl_zuord` (`abschluss_id`, `kategorie_id`, `position`, `author_id`, `editor_id`, `mkdate`, `chdate`) VALUES('c7f569e815a35cf24a515a0e67928072', '2', 0, '', '', 1545135981, 1545135981);

INSERT INTO `mvv_fach_inst` (`fach_id`, `institut_id`, `position`, `author_id`, `editor_id`, `mkdate`, `chdate`) VALUES('6b9ac09535885ca55e29dd011e377c0a', '1535795b0d6ddecac6813f5f6ac47ef2', 0, '', '', 1545135981, 1545135981);
INSERT INTO `mvv_fach_inst` (`fach_id`, `institut_id`, `position`, `author_id`, `editor_id`, `mkdate`, `chdate`) VALUES('f981c9b42ca72788a09da4a45794a737', '1535795b0d6ddecac6813f5f6ac47ef2', 0, '', '', 1545135981, 1545135981);

INSERT INTO `mvv_lvgruppe` (`lvgruppe_id`, `name`, `alttext`, `author_id`, `editor_id`, `mkdate`, `chdate`) VALUES('36677a1d815d4528bebf89833d168f56', 'GES-SK-01: Vorlesung', NULL, '', '', 1545135981, 1545135981);
INSERT INTO `mvv_lvgruppe` (`lvgruppe_id`, `name`, `alttext`, `author_id`, `editor_id`, `mkdate`, `chdate`) VALUES('40e1ada2c00e13a09e88143934e76efa', 'INF-CB: Vorlesung', NULL, '', '', 1545135981, 1545135981);
INSERT INTO `mvv_lvgruppe` (`lvgruppe_id`, `name`, `alttext`, `author_id`, `editor_id`, `mkdate`, `chdate`) VALUES('9938b594f4c50c21ed235b2f92e82177', 'INF-AA-01: Seminar', NULL, '', '', 1545135981, 1545135981);
INSERT INTO `mvv_lvgruppe` (`lvgruppe_id`, `name`, `alttext`, `author_id`, `editor_id`, `mkdate`, `chdate`) VALUES('daf94f1c25809886095022d124aaf1fa', 'GES-MIT: Vorlesung', NULL, '', '', 1545135981, 1545135981);

INSERT INTO `mvv_lvgruppe_modulteil` (`lvgruppe_id`, `modulteil_id`, `position`, `fn_id`, `author_id`, `editor_id`, `mkdate`, `chdate`) VALUES('36677a1d815d4528bebf89833d168f56', '7b89d02083ee74f2a52a17e913069cdf', 9999, NULL, '', '', 1545135981, 1545135981);
INSERT INTO `mvv_lvgruppe_modulteil` (`lvgruppe_id`, `modulteil_id`, `position`, `fn_id`, `author_id`, `editor_id`, `mkdate`, `chdate`) VALUES('40e1ada2c00e13a09e88143934e76efa', 'a34a823cb6c4b55f8f63f74088bbdb86', 9999, NULL, '', '', 1545135981, 1545135981);
INSERT INTO `mvv_lvgruppe_modulteil` (`lvgruppe_id`, `modulteil_id`, `position`, `fn_id`, `author_id`, `editor_id`, `mkdate`, `chdate`) VALUES('9938b594f4c50c21ed235b2f92e82177', 'ad5d5bdc988850fde010cc891d53469c', 9999, NULL, '', '', 1545135981, 1545135981);
INSERT INTO `mvv_lvgruppe_modulteil` (`lvgruppe_id`, `modulteil_id`, `position`, `fn_id`, `author_id`, `editor_id`, `mkdate`, `chdate`) VALUES('daf94f1c25809886095022d124aaf1fa', '80f915287984887b2e7ec9b359418e56', 9999, NULL, '', '', 1545135981, 1545135981);

INSERT INTO `mvv_modul` (`modul_id`, `quelle`, `variante`, `flexnow_modul`, `code`, `start`, `end`, `beschlussdatum`, `fassung_nr`, `fassung_typ`, `version`, `dauer`, `kapazitaet`, `kp`, `wl_selbst`, `wl_pruef`, `pruef_ebene`, `faktor_note`, `stat`, `kommentar_status`, `verantwortlich`, `author_id`, `editor_id`, `mkdate`, `chdate`) VALUES('36677a1d815d4528bebf89833d168f56', NULL, NULL, '', 'GES-SK-01', NULL, NULL, NULL, NULL, NULL, '1', '1', '', 2, NULL, NULL, NULL, '1', 'genehmigt', NULL, '', '', '', 1545135981, 1545135981);
INSERT INTO `mvv_modul` (`modul_id`, `quelle`, `variante`, `flexnow_modul`, `code`, `start`, `end`, `beschlussdatum`, `fassung_nr`, `fassung_typ`, `version`, `dauer`, `kapazitaet`, `kp`, `wl_selbst`, `wl_pruef`, `pruef_ebene`, `faktor_note`, `stat`, `kommentar_status`, `verantwortlich`, `author_id`, `editor_id`, `mkdate`, `chdate`) VALUES('40e1ada2c00e13a09e88143934e76efa', NULL, NULL, '', 'INF-CB', NULL, NULL, NULL, NULL, NULL, '1', '1', '', 3, NULL, NULL, NULL, '1', 'genehmigt', NULL, '', '', '', 1545135981, 1545135981);
INSERT INTO `mvv_modul` (`modul_id`, `quelle`, `variante`, `flexnow_modul`, `code`, `start`, `end`, `beschlussdatum`, `fassung_nr`, `fassung_typ`, `version`, `dauer`, `kapazitaet`, `kp`, `wl_selbst`, `wl_pruef`, `pruef_ebene`, `faktor_note`, `stat`, `kommentar_status`, `verantwortlich`, `author_id`, `editor_id`, `mkdate`, `chdate`) VALUES('9938b594f4c50c21ed235b2f92e82177', NULL, NULL, '', 'INF-AA-01', NULL, NULL, NULL, NULL, NULL, '1', '1', '', 6, NULL, NULL, NULL, '1', 'genehmigt', NULL, '', '', '', 1545135981, 1545135981);
INSERT INTO `mvv_modul` (`modul_id`, `quelle`, `variante`, `flexnow_modul`, `code`, `start`, `end`, `beschlussdatum`, `fassung_nr`, `fassung_typ`, `version`, `dauer`, `kapazitaet`, `kp`, `wl_selbst`, `wl_pruef`, `pruef_ebene`, `faktor_note`, `stat`, `kommentar_status`, `verantwortlich`, `author_id`, `editor_id`, `mkdate`, `chdate`) VALUES('daf94f1c25809886095022d124aaf1fa', NULL, NULL, '', 'GES-MIT', NULL, NULL, NULL, NULL, NULL, '1', '1', '', 2, NULL, NULL, NULL, '1', 'genehmigt', NULL, '', '', '', 1545135981, 1545135981);

INSERT INTO `mvv_modulteil` (`modulteil_id`, `modul_id`, `position`, `flexnow_modul`, `nummer`, `num_bezeichnung`, `lernlehrform`, `semester`, `kapazitaet`, `kp`, `sws`, `wl_praesenz`, `wl_bereitung`, `wl_selbst`, `wl_pruef`, `anteil_note`, `ausgleichbar`, `pflicht`, `author_id`, `editor_id`, `mkdate`, `chdate`) VALUES('7b89d02083ee74f2a52a17e913069cdf', '36677a1d815d4528bebf89833d168f56', 0, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, '', '', 1545135981, 1545135981);
INSERT INTO `mvv_modulteil` (`modulteil_id`, `modul_id`, `position`, `flexnow_modul`, `nummer`, `num_bezeichnung`, `lernlehrform`, `semester`, `kapazitaet`, `kp`, `sws`, `wl_praesenz`, `wl_bereitung`, `wl_selbst`, `wl_pruef`, `anteil_note`, `ausgleichbar`, `pflicht`, `author_id`, `editor_id`, `mkdate`, `chdate`) VALUES('80f915287984887b2e7ec9b359418e56', 'daf94f1c25809886095022d124aaf1fa', 0, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, '', '', 1545135981, 1545135981);
INSERT INTO `mvv_modulteil` (`modulteil_id`, `modul_id`, `position`, `flexnow_modul`, `nummer`, `num_bezeichnung`, `lernlehrform`, `semester`, `kapazitaet`, `kp`, `sws`, `wl_praesenz`, `wl_bereitung`, `wl_selbst`, `wl_pruef`, `anteil_note`, `ausgleichbar`, `pflicht`, `author_id`, `editor_id`, `mkdate`, `chdate`) VALUES('a34a823cb6c4b55f8f63f74088bbdb86', '40e1ada2c00e13a09e88143934e76efa', 0, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, '', '', 1545135981, 1545135981);
INSERT INTO `mvv_modulteil` (`modulteil_id`, `modul_id`, `position`, `flexnow_modul`, `nummer`, `num_bezeichnung`, `lernlehrform`, `semester`, `kapazitaet`, `kp`, `sws`, `wl_praesenz`, `wl_bereitung`, `wl_selbst`, `wl_pruef`, `anteil_note`, `ausgleichbar`, `pflicht`, `author_id`, `editor_id`, `mkdate`, `chdate`) VALUES('ad5d5bdc988850fde010cc891d53469c', '9938b594f4c50c21ed235b2f92e82177', 0, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, '', '', 1545135981, 1545135981);

INSERT INTO `mvv_modulteil_deskriptor` (`deskriptor_id`, `modulteil_id`, `bezeichnung`, `voraussetzung`, `kommentar`, `kommentar_kapazitaet`, `kommentar_wl_praesenz`, `kommentar_wl_bereitung`, `kommentar_wl_selbst`, `kommentar_wl_pruef`, `pruef_vorleistung`, `pruef_leistung`, `kommentar_pflicht`, `author_id`, `editor_id`, `mkdate`, `chdate`) VALUES('7b89d02083ee74f2a52a17e913069cdf', '7b89d02083ee74f2a52a17e913069cdf', 'Vorlesung', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', '', 1545135981, 1545135981);
INSERT INTO `mvv_modulteil_deskriptor` (`deskriptor_id`, `modulteil_id`, `bezeichnung`, `voraussetzung`, `kommentar`, `kommentar_kapazitaet`, `kommentar_wl_praesenz`, `kommentar_wl_bereitung`, `kommentar_wl_selbst`, `kommentar_wl_pruef`, `pruef_vorleistung`, `pruef_leistung`, `kommentar_pflicht`, `author_id`, `editor_id`, `mkdate`, `chdate`) VALUES('80f915287984887b2e7ec9b359418e56', '80f915287984887b2e7ec9b359418e56', 'Vorlesung', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', '', 1545135981, 1545135981);
INSERT INTO `mvv_modulteil_deskriptor` (`deskriptor_id`, `modulteil_id`, `bezeichnung`, `voraussetzung`, `kommentar`, `kommentar_kapazitaet`, `kommentar_wl_praesenz`, `kommentar_wl_bereitung`, `kommentar_wl_selbst`, `kommentar_wl_pruef`, `pruef_vorleistung`, `pruef_leistung`, `kommentar_pflicht`, `author_id`, `editor_id`, `mkdate`, `chdate`) VALUES('a34a823cb6c4b55f8f63f74088bbdb86', 'a34a823cb6c4b55f8f63f74088bbdb86', 'Vorlesung', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', '', 1545135981, 1545135981);
INSERT INTO `mvv_modulteil_deskriptor` (`deskriptor_id`, `modulteil_id`, `bezeichnung`, `voraussetzung`, `kommentar`, `kommentar_kapazitaet`, `kommentar_wl_praesenz`, `kommentar_wl_bereitung`, `kommentar_wl_selbst`, `kommentar_wl_pruef`, `pruef_vorleistung`, `pruef_leistung`, `kommentar_pflicht`, `author_id`, `editor_id`, `mkdate`, `chdate`) VALUES('ad5d5bdc988850fde010cc891d53469c', 'ad5d5bdc988850fde010cc891d53469c', 'Seminar', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', '', 1545135981, 1545135981);

INSERT INTO `mvv_modul_deskriptor` (`deskriptor_id`, `modul_id`, `verantwortlich`, `bezeichnung`, `voraussetzung`, `kompetenzziele`, `inhalte`, `literatur`, `links`, `kommentar`, `turnus`, `kommentar_kapazitaet`, `kommentar_sws`, `kommentar_wl_selbst`, `kommentar_wl_pruef`, `kommentar_note`, `pruef_vorleistung`, `pruef_leistung`, `pruef_wiederholung`, `ersatztext`, `author_id`, `editor_id`, `mkdate`, `chdate`) VALUES('36677a1d815d4528bebf89833d168f56', '36677a1d815d4528bebf89833d168f56', '', 'Schlüsselkompetenzen Geschichte', NULL, '', 'Thematischer Überblick zu Inhalten des gewählten Faches', NULL, NULL, NULL, 'Jährlich', NULL, NULL, NULL, NULL, '', '', '', '', NULL, '', '', 1545135981, 1545135981);
INSERT INTO `mvv_modul_deskriptor` (`deskriptor_id`, `modul_id`, `verantwortlich`, `bezeichnung`, `voraussetzung`, `kompetenzziele`, `inhalte`, `literatur`, `links`, `kommentar`, `turnus`, `kommentar_kapazitaet`, `kommentar_sws`, `kommentar_wl_selbst`, `kommentar_wl_pruef`, `kommentar_note`, `pruef_vorleistung`, `pruef_leistung`, `pruef_wiederholung`, `ersatztext`, `author_id`, `editor_id`, `mkdate`, `chdate`) VALUES('40e1ada2c00e13a09e88143934e76efa', '40e1ada2c00e13a09e88143934e76efa', '', 'Compilerbau', NULL, '', 'Einführung in Klassifikation höherer Programmiersprachen, Aufbau von Übersetzern inklusive Codeerzeugung', NULL, NULL, NULL, 'unregelmäßig', NULL, NULL, NULL, NULL, '', '', 'Klausur (90 min) oder mündliche Prüfung (30 min)', '', NULL, '', '', 1545135981, 1545135981);
INSERT INTO `mvv_modul_deskriptor` (`deskriptor_id`, `modul_id`, `verantwortlich`, `bezeichnung`, `voraussetzung`, `kompetenzziele`, `inhalte`, `literatur`, `links`, `kommentar`, `turnus`, `kommentar_kapazitaet`, `kommentar_sws`, `kommentar_wl_selbst`, `kommentar_wl_pruef`, `kommentar_note`, `pruef_vorleistung`, `pruef_leistung`, `pruef_wiederholung`, `ersatztext`, `author_id`, `editor_id`, `mkdate`, `chdate`) VALUES('9938b594f4c50c21ed235b2f92e82177', '9938b594f4c50c21ed235b2f92e82177', '', 'Authentifizierung und Autorisierung', NULL, '', '- Passwortbasierte Authentifizierungsverfahren\n- Zertifikatsbasierte Authentifizierungsverfahren\n- Biometrische Verfahren', NULL, NULL, NULL, 'unregelmäßig', NULL, NULL, NULL, NULL, '', 'Vortrag über ein Teilthema (30 Minuten)', 'Klausur (120 Minuten) oder mündliche Prüfung (30 Minuten)', '', NULL, '', '', 1545135981, 1545135981);
INSERT INTO `mvv_modul_deskriptor` (`deskriptor_id`, `modul_id`, `verantwortlich`, `bezeichnung`, `voraussetzung`, `kompetenzziele`, `inhalte`, `literatur`, `links`, `kommentar`, `turnus`, `kommentar_kapazitaet`, `kommentar_sws`, `kommentar_wl_selbst`, `kommentar_wl_pruef`, `kommentar_note`, `pruef_vorleistung`, `pruef_leistung`, `pruef_wiederholung`, `ersatztext`, `author_id`, `editor_id`, `mkdate`, `chdate`) VALUES('daf94f1c25809886095022d124aaf1fa', 'daf94f1c25809886095022d124aaf1fa', '', 'Geschichte des frühen Mittelalters', NULL, '', 'Entwicklung der mitteralterlichen Gesellschaft in Europa', NULL, NULL, NULL, 'Jährlich', NULL, NULL, NULL, NULL, '', '', '', '', NULL, '', '', 1545135981, 1545135981);

INSERT INTO `mvv_modul_inst` (`modul_id`, `institut_id`, `gruppe`, `position`, `author_id`, `editor_id`, `mkdate`, `chdate`) VALUES('36677a1d815d4528bebf89833d168f56', '1535795b0d6ddecac6813f5f6ac47ef2', 'hauptverantwortlich', 9999, '', '', 1545135981, 1545135981);
INSERT INTO `mvv_modul_inst` (`modul_id`, `institut_id`, `gruppe`, `position`, `author_id`, `editor_id`, `mkdate`, `chdate`) VALUES('40e1ada2c00e13a09e88143934e76efa', '1535795b0d6ddecac6813f5f6ac47ef2', 'hauptverantwortlich', 9999, '', '', 1545135981, 1545135981);
INSERT INTO `mvv_modul_inst` (`modul_id`, `institut_id`, `gruppe`, `position`, `author_id`, `editor_id`, `mkdate`, `chdate`) VALUES('9938b594f4c50c21ed235b2f92e82177', '1535795b0d6ddecac6813f5f6ac47ef2', 'hauptverantwortlich', 9999, '', '', 1545135981, 1545135981);
INSERT INTO `mvv_modul_inst` (`modul_id`, `institut_id`, `gruppe`, `position`, `author_id`, `editor_id`, `mkdate`, `chdate`) VALUES('daf94f1c25809886095022d124aaf1fa', '1535795b0d6ddecac6813f5f6ac47ef2', 'hauptverantwortlich', 9999, '', '', 1545135981, 1545135981);

INSERT INTO `mvv_stgteil` (`stgteil_id`, `fach_id`, `kp`, `semester`, `zusatz`, `author_id`, `editor_id`, `mkdate`, `chdate`) VALUES('e58b0eaf0c09c9fef4cab09cdec8dcc2', '6b9ac09535885ca55e29dd011e377c0a', NULL, NULL, 'im Bachelor (Hauptfach)', '', '', 1545135981, 1545135981);
INSERT INTO `mvv_stgteil` (`stgteil_id`, `fach_id`, `kp`, `semester`, `zusatz`, `author_id`, `editor_id`, `mkdate`, `chdate`) VALUES('f6ec30150732fa6ae913f4c3779e305a', 'f981c9b42ca72788a09da4a45794a737', NULL, NULL, 'im Master', '', '', 1545135981, 1545135981);

INSERT INTO `mvv_stgteilabschnitt` (`abschnitt_id`, `version_id`, `position`, `name`, `kommentar`, `kp`, `ueberschrift`, `author_id`, `editor_id`, `mkdate`, `chdate`) VALUES('4ef431ff53145290b8550250db7b657b', 'e926187d4022cb0af52ad0553e2f6852', 0, 'Schlüsselkompetenzen Geschichte', NULL, 0, NULL, '', '', 1545135981, 1545135981);
INSERT INTO `mvv_stgteilabschnitt` (`abschnitt_id`, `version_id`, `position`, `name`, `kommentar`, `kp`, `ueberschrift`, `author_id`, `editor_id`, `mkdate`, `chdate`) VALUES('bb9a7de27c1fce5620af1fd38c9635cc', 'fb029d7d1ac739bf363119b4ca1674c1', 0, 'Studienbegleitende Leistungen', NULL, 90, NULL, '', '', 1545135981, 1545135981);

INSERT INTO `mvv_stgteilabschnitt_modul` (`abschnitt_modul_id`, `abschnitt_id`, `modul_id`, `flexnow_modul`, `modulcode`, `position`, `bezeichnung`, `author_id`, `editor_id`, `mkdate`, `chdate`) VALUES('41961b1eee17b8c4938c3c20b7ae8382', 'bb9a7de27c1fce5620af1fd38c9635cc', '40e1ada2c00e13a09e88143934e76efa', NULL, NULL, 1, NULL, '', '', 1545135981, 1545135981);
INSERT INTO `mvv_stgteilabschnitt_modul` (`abschnitt_modul_id`, `abschnitt_id`, `modul_id`, `flexnow_modul`, `modulcode`, `position`, `bezeichnung`, `author_id`, `editor_id`, `mkdate`, `chdate`) VALUES('77946e2559842d574a1427f00efb2409', 'bb9a7de27c1fce5620af1fd38c9635cc', '9938b594f4c50c21ed235b2f92e82177', NULL, NULL, 0, NULL, '', '', 1545135981, 1545135981);
INSERT INTO `mvv_stgteilabschnitt_modul` (`abschnitt_modul_id`, `abschnitt_id`, `modul_id`, `flexnow_modul`, `modulcode`, `position`, `bezeichnung`, `author_id`, `editor_id`, `mkdate`, `chdate`) VALUES('e0b95319a5c2768c5a7358255c2e6bcd', '4ef431ff53145290b8550250db7b657b', 'daf94f1c25809886095022d124aaf1fa', NULL, NULL, 1, NULL, '', '', 1545135981, 1545135981);
INSERT INTO `mvv_stgteilabschnitt_modul` (`abschnitt_modul_id`, `abschnitt_id`, `modul_id`, `flexnow_modul`, `modulcode`, `position`, `bezeichnung`, `author_id`, `editor_id`, `mkdate`, `chdate`) VALUES('e9b957e2742ee8f953ea1d8cab303a0b', '4ef431ff53145290b8550250db7b657b', '36677a1d815d4528bebf89833d168f56', NULL, NULL, 0, NULL, '', '', 1545135981, 1545135981);

INSERT INTO `mvv_stgteilversion` (`version_id`, `stgteil_id`, `start_sem`, `end_sem`, `code`, `beschlussdatum`, `fassung_nr`, `fassung_typ`, `beschreibung`, `stat`, `kommentar_status`, `author_id`, `editor_id`, `mkdate`, `chdate`) VALUES('e926187d4022cb0af52ad0553e2f6852', 'e58b0eaf0c09c9fef4cab09cdec8dcc2', '322f640f3f4643ebe514df65f1163eb1', NULL, '20182', 1545135981, NULL, NULL, NULL, 'genehmigt', NULL, '', '', 1545135981, 1545135981);
INSERT INTO `mvv_stgteilversion` (`version_id`, `stgteil_id`, `start_sem`, `end_sem`, `code`, `beschlussdatum`, `fassung_nr`, `fassung_typ`, `beschreibung`, `stat`, `kommentar_status`, `author_id`, `editor_id`, `mkdate`, `chdate`) VALUES('fb029d7d1ac739bf363119b4ca1674c1', 'f6ec30150732fa6ae913f4c3779e305a', '322f640f3f4643ebe514df65f1163eb1', NULL, '20102', 1545135981, NULL, NULL, NULL, 'genehmigt', NULL, '', '', 1545135981, 1545135981);

INSERT INTO `mvv_stgteil_bez` (`stgteil_bez_id`, `name`, `name_kurz`, `position`, `author_id`, `editor_id`, `mkdate`, `chdate`) VALUES('1', 'Hauptfach', 'HF', 9999, '', '', 1545135981, 1545135981);
INSERT INTO `mvv_stgteil_bez` (`stgteil_bez_id`, `name`, `name_kurz`, `position`, `author_id`, `editor_id`, `mkdate`, `chdate`) VALUES('2', 'Nebenfach', 'NF', 9999, '', '', 1545135981, 1545135981);

INSERT INTO `mvv_stg_stgteil` (`studiengang_id`, `stgteil_id`, `stgteil_bez_id`, `position`, `author_id`, `editor_id`, `mkdate`, `chdate`) VALUES('58f22c9a19b296e7e5fbfa7d7a059c79', 'e58b0eaf0c09c9fef4cab09cdec8dcc2', '1', 0, '', '', 1545135981, 1545135981);
INSERT INTO `mvv_stg_stgteil` (`studiengang_id`, `stgteil_id`, `stgteil_bez_id`, `position`, `author_id`, `editor_id`, `mkdate`, `chdate`) VALUES('7e5c6adb4152e8d402e5dba26664fa32', 'f6ec30150732fa6ae913f4c3779e305a', '1', 0, '', '', 1545135981, 1545135981);

INSERT INTO `mvv_studiengang` (`studiengang_id`, `abschluss_id`, `typ`, `name`, `name_kurz`, `beschreibung`, `institut_id`, `start`, `end`, `beschlussdatum`, `fassung_nr`, `fassung_typ`, `stat`, `kommentar_status`, `schlagworte`, `author_id`, `editor_id`, `mkdate`, `chdate`) VALUES('58f22c9a19b296e7e5fbfa7d7a059c79', '228234544820cdf75db55b42d1ea3ecc', 'mehrfach', 'Bachelor Geschichte', NULL, NULL, '1535795b0d6ddecac6813f5f6ac47ef2', NULL, NULL, NULL, NULL, NULL, 'genehmigt', NULL, NULL, '', '', 1545135981, 1545135981);
INSERT INTO `mvv_studiengang` (`studiengang_id`, `abschluss_id`, `typ`, `name`, `name_kurz`, `beschreibung`, `institut_id`, `start`, `end`, `beschlussdatum`, `fassung_nr`, `fassung_typ`, `stat`, `kommentar_status`, `schlagworte`, `author_id`, `editor_id`, `mkdate`, `chdate`) VALUES('7e5c6adb4152e8d402e5dba26664fa32', 'c7f569e815a35cf24a515a0e67928072', 'einfach', 'Master Informatik', NULL, NULL, '1535795b0d6ddecac6813f5f6ac47ef2', NULL, NULL, NULL, NULL, NULL, 'genehmigt', NULL, NULL, '', '', 1545135981, 1545135981);

REPLACE INTO `sem_classes` (`id`, `name`, `only_inst_user`, `default_read_level`, `default_write_level`, `bereiche`, `module`, `show_browse`, `write_access_nobody`, `topic_create_autor`, `visible`, `course_creation_forbidden`, `overview`, `forum`, `admin`, `documents`, `schedule`, `participants`, `literature`, `scm`, `wiki`, `resources`, `calendar`, `elearning_interface`, `modules`, `description`, `create_description`, `studygroup_mode`, `admission_prelim_default`, `admission_type_default`, `title_dozent`, `title_dozent_plural`, `title_tutor`, `title_tutor_plural`, `title_autor`, `title_autor_plural`, `show_raumzeit`, `is_group`, `mkdate`, `chdate`) VALUES(1, 'Lehre', 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 'CoreOverview', 'CoreForum', 'CoreAdmin', 'CoreDocuments', 'CoreSchedule', 'CoreParticipants', 'CoreLiterature', 'CoreScm', 'CoreWiki', 'CoreResources', 'CoreCalendar', 'CoreElearningInterface', '{\"CoreOverview\":{\"activated\":\"1\",\"sticky\":\"1\"},\"CoreAdmin\":{\"activated\":\"1\",\"sticky\":\"1\"},\"CoreForum\":{\"activated\":\"1\",\"sticky\":\"0\"},\"CoreParticipants\":{\"activated\":\"1\",\"sticky\":\"0\"},\"CoreDocuments\":{\"activated\":\"1\",\"sticky\":\"0\"},\"CoreSchedule\":{\"activated\":\"1\",\"sticky\":\"0\"},\"CoreLiterature\":{\"activated\":\"1\",\"sticky\":\"0\"},\"CoreScm\":{\"activated\":\"1\",\"sticky\":\"0\"},\"CoreWiki\":{\"activated\":\"1\",\"sticky\":\"0\"},\"CoreResources\":{\"activated\":\"1\",\"sticky\":\"0\"},\"CoreCalendar\":{\"activated\":\"1\",\"sticky\":\"0\"},\"CoreElearningInterface\":{\"activated\":\"1\",\"sticky\":\"0\"},\"Blubber\":{\"activated\":\"0\",\"sticky\":\"0\"},\"IliasInterfaceModule\":{\"activated\":\"0\",\"sticky\":\"0\"},\"LtiToolModule\":{\"activated\":\"0\",\"sticky\":\"0\"},\"CoreStudygroupAdmin\":{\"activated\":\"0\",\"sticky\":\"1\"},\"CoreStudygroupParticipants\":{\"activated\":\"0\",\"sticky\":\"1\"}}', 'Hier finden Sie alle in Stud.IP registrierten Lehrveranstaltungen', '', 0, 0, 0, NULL, NULL, NULL, NULL, NULL, NULL, 1, 0, 1366882120, 1557247960);
