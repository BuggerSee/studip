<form class="default" action="<?= $controller->url_for('/select_range', $range_type) ?>" method="post" data-dialog="size=auto">

    <label>
    <? if ($range_type == 'Studiengang'): ?>
        <select id="search-contact-studiengang-select" class="nested-select" multiple name="range_id[]"></select>
    <? elseif ($range_type == 'AbschlussKategorie'): ?>
        <select class="nested-select" multiple name="range_id[]">
        <? foreach(AbschlussKategorie::getAllEnriched() as $abs_kat) : ?>
            <option value="<?= $abs_kat->getId(); ?>"><?= htmlReady($abs_kat->getDisplayName()); ?></option>
        <? endforeach; ?>
        </select>
    <? endif; ?>
    </label>

    <?= CSRFProtection::tokenTag(); ?>
    <div data-dialog-button>
        <?= Studip\Button::createAccept(_('Weiter'), 'store') ?>
        <?= Studip\LinkButton::createCancel(); ?>
    </div>

    <div id="search-contact-params"
        data-contact=""
    ></div>

</form>