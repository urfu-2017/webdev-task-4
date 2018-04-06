'use sctrict';
/* eslint no-undef: 0 new-cap: 0*/

const onSearchBtnClick = function (e) {
    const searchTab = document.querySelector('.header__search');
    searchTab.classList.add('header__search_visible');
    e.target.classList.add('header__search-logo_hide');

    const searchInput = document.querySelector('.header__input');
    searchInput.focus();
};

const onSearchInputBlur = function () {
    if (window.innerWidth > 720 && window.innerWidth < 1200) {
        const searchLogo = document.querySelector('.header__search-logo');
        const searchTab = document.querySelector('.header__search');

        searchTab.classList.remove('header__search_visible');
        searchLogo.classList.remove('header__search-logo_hide');
    }
};

const onClickBurger = function () {
    const rightBar = document.querySelector('.right-bar');
    rightBar.classList.add('right-bar_show');

    const body = document.body;
    body.style.overflow = 'hidden';
};

const onClickCloseBar = function () {
    const rightBar = document.querySelector('.right-bar');
    rightBar.classList.remove('right-bar_show');

    const body = document.body;
    body.style.overflow = 'scroll';
};

// Resize
function resize() {
    const navigation = document.querySelector('.navigation');
    if (window.innerWidth <= 720) {
        const rightBar = document.querySelector('.right-bar');
        rightBar.prepend(navigation);
    } else {
        const main = document.querySelector('.main');
        main.prepend(navigation);
    }
}

let x = 0;

window.onload = () => {
    const body = document.body;
    body.addEventListener('touchstart', (e) => {
        x = e.clientX;
    }, false);

    body.addEventListener('touchend', (e) => {
        if (e.clientX + 160 < x && window.innerWidth <= 720) {
            onClickBurger();
        }
    }, false);

    const searchBtn = document.querySelector('.header__search-logo');
    searchBtn.addEventListener('click', onSearchBtnClick, false);

    const searchInput = document.querySelector('.header__input');
    searchInput.addEventListener('blur', onSearchInputBlur, false);

    const burger = document.querySelector('.burger');
    burger.addEventListener('click', onClickBurger, false);

    const closeBtn = document.querySelector('.right-bar__close');
    closeBtn.addEventListener('click', onClickCloseBar, false);
};

window.onresize = () => {
    resize();
};
