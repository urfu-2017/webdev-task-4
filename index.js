'use sctrict';
/* eslint no-undef: 0 new-cap: 0*/

const onSearchBtnClick = function (e) {
    const searchTab = document.getElementsByClassName('footer_search')[0];
    searchTab.style.display = 'flex';
    e.target.style.display = 'none';
    const searchInput = document.getElementsByClassName('footer_input')[0];
    searchInput.focus();
};

const onSearchInputBlur = function () {
    if (window.innerWidth > 720 && window.innerWidth < 1200) {
        const searchLogo = document.getElementsByClassName('footer_search-logo')[0];
        const searchTab = document.getElementsByClassName('footer_search')[0];
        searchLogo.style.display = 'flex';
        searchTab.style.display = 'none';
    }
};

const onClickBurger = function () {
    const rightBar = document.getElementsByClassName('right-bar')[0];
    rightBar.style.display = 'block';

    const body = document.getElementsByTagName('body')[0];
    body.style.overflow = 'hidden';
};

const onClickCloseBar = function () {
    const rightBar = document.getElementsByClassName('right-bar')[0];
    rightBar.style.display = 'none';

    const body = document.getElementsByTagName('body')[0];
    body.style.overflow = 'scroll';
};

function min720() {
    if (window.innerWidth <= 720) {
        const main = document.getElementsByClassName('main')[0];
        const popular = document.getElementsByClassName('popular')[0];
        main.prepend(popular);

        const rightBar = document.getElementsByClassName('right-bar')[0];
        const navigation = document.getElementsByClassName('navigation')[0];
        rightBar.prepend(navigation);
    }
}

window.onload = () => {
    const body = document.getElementsByTagName('body')[0];
    Hammer(body).on('swipeleft', function () {
        onClickBurger();
    });

    const searchBtn = document.getElementsByClassName('footer_search-logo')[0];
    searchBtn.addEventListener('click', onSearchBtnClick, false);

    const searchInput = document.getElementsByClassName('footer_input')[0];
    searchInput.addEventListener('blur', onSearchInputBlur, false);

    const burger = document.getElementsByClassName('burger')[0];
    burger.addEventListener('click', onClickBurger, false);

    const closeBtn = document.getElementsByClassName('right-bar_close')[0];
    closeBtn.addEventListener('click', onClickCloseBar, false);

    min720();
};
