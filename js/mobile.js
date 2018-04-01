'use strict';


window.onload = () => {
    const searchBtn = document.querySelector('.search__button_touch');
    const input = document.querySelector('.search__input');
    searchBtn.onclick = () => {
        if (window.innerWidth < 500 || window.innerWidth > 768) {
            return;
        }
        input.classList.add('search__input_visible');
        searchBtn.classList.add('search__button_touch_hidden');
        input.focus();
    };

    input.onblur = () => {
        if (window.innerWidth < 500 || window.innerWidth > 768) {
            return;
        }
        searchBtn.classList.remove('search__button_touch_hidden');
        input.classList.remove('search__input_visible');
    };

    document.querySelector('.header__menu-btn').onclick = () => {
        showSideMenu();
    };

    document.querySelector('.nav__close').onclick = () => {
        document.querySelector('.nav').classList.remove('nav_mobile');
        document.body.style.overflow = '';
    };

    function showSideMenu() {
        const nav = document.querySelector('.nav');
        nav.classList.add('nav_mobile');
        document.body.style.overflow = 'hidden';
    }

    document.querySelector('.page').ontouchstart = (e) => {
        const touch = e.touches[0];
        const startX = touch.clientX;
        const startY = touch.clientY;
        document.querySelector('.page').ontouchend = (ev) => {
            const touchEnd = ev.changedTouches[0];
            const endX = touchEnd.clientX;
            const endY = touchEnd.clientY;
            if (startX - endX > 100 && Math.abs(endY - startY) < 40) {
                showSideMenu();
            }
        };
    };
};
