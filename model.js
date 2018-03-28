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

let page = document.querySelector(".mainPart");
let hammer = new Hammer(page);
hammer.on('swipeleft', () => {
    document.getElementById('sandwich').click();
})
hammer.on('swiperight', () => {
    document.getElementById('sandwich').click();
})
/* eslint-enable */
