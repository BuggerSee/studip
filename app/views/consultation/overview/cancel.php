<form action="<?= $controller->cancel($slot->block, $slot, $from_booked) ?>" method="post" class="default">
    <?= CSRFProtection::tokenTag() ?>

    <fieldset>
        <legend><?= _('Sprechstundentermin absagen') ?></legend>

        <label>
            <?= _('Termin' ) ?><br>
            <?= $this->render_partial('consultation/slot-details.php', compact('slot')) ?>
        </label>

        <label>
            <?= _('Ort') ?><br>
            <?= htmlready($slot->block->room) ?>
        </label>

        <label>
            <?= _('Grund') ?>
            <textarea name="reason"></textarea>
        </label>
    </fieldset>

    <footer data-dialog-button>
        <?= Studip\Button::createAccept(_('Termin absagen')) ?>
        <?= Studip\LinkButton::createCancel(
            _('Abbrechen'),
            $controller->url_for("consultation/overview#block-{$slot->block_id}")
        ) ?>
    </footer>
</form>
