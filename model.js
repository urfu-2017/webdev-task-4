/* eslint-disable */
function openSearch() {
    if (document.documentElement.clientWidth > 677 &&
        document.documentElement.clientWidth < 1200) {
        var el = document.getElementById('header__searchbar');
        el.style.display = 'block';
        document.getElementById('header__inputtext').focus();
    }
}

function hiddenSearch() {
    if (document.documentElement.clientWidth > 677 &&
        document.documentElement.clientWidth < 1200) {
        var el = document.getElementById('header__searchbar');
        el.style.display = 'none';
    }
}

function swipes() {
    $('.mainPart').swipe({
        swipeStatus: function (event, phase, direction) {
            if (document.documentElement.clientWidth < 677) {
                if (phase === 'move' && direction === 'right') {
                    document.getElementById('sandwich').click();
                }
                if (phase === 'move' && direction === 'left') {
                    document.getElementById('sandwich').click();
                }
            }
        }
    });
}
/* eslint-enable */
