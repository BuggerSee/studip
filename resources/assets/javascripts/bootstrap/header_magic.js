STUDIP.domReady(() => {
    // Test if the header is actually present
    if ($('#barBottomContainer').length > 0) {
        STUDIP.HeaderMagic.enable();
    }
});
