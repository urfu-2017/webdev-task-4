'use strict';

const FONT_AWESOME_TIMEOUT = 700;
var touchstartX = 0;

// DOM
const header = {
    wrapper: document.querySelector('.header'),
    getBarsIcon: () => document.querySelector('.header__bars-icon'),
    search: {
        wrapper: document.querySelector('.search'),
        getIcon: () => document.querySelector('.search__icon'),
        input: document.querySelector('.search__input'),
        button: document.querySelector('.search__button')
    }
};

const navigation = {
    wrapper: document.querySelector('.navigation'),
    getCloseIcon: () => document.querySelector('.navigation__close-icon')
};

const page = document.querySelector('.page');


document.addEventListener('DOMContentLoaded', main);

function main() {
    setTimeout(
        () => {
            header.search.getIcon().addEventListener('click', () => switchSearchField());
            header.search.input.addEventListener('blur', () => switchSearchField(true));
            header.getBarsIcon().addEventListener('click', () => switchNavigationDrawer());
            navigation.getCloseIcon().addEventListener('click', () => switchNavigationDrawer(true));
            page.addEventListener('click', () => switchNavigationDrawer(true), true);
        },
        FONT_AWESOME_TIMEOUT
    );

    // eslint-disable-next-line no-undef
    page.addEventListener('touchstart', event => {
        touchstartX = event.touches[0].pageX;
    }, false);
    page.addEventListener('touchend', event => {
        if (touchstartX - event.changedTouches[0].pageX > 100) {
            switchNavigationDrawer();
        }

        touchstartX = 0;
    }, false);
}

// Switchers

function switchSearchField(collapse = false) {
    if (window.innerWidth < 600 || window.innerWidth >= 1024) {
        return;
    }

    header.search.getIcon().style.display = collapse ? 'block' : 'none';
    header.search.input.style.display = collapse ? 'none' : 'block';
    header.search.input.focus();
    header.search.button.style.display = collapse ? 'none' : 'block';
}

function switchNavigationDrawer(collapse = false) {
    if (window.innerWidth > 425) {
        return;
    }

    document.body.style.overflow = collapse ? 'visible' : 'hidden';
    navigation.wrapper.style.display = collapse ? 'none' : 'flex';
}
