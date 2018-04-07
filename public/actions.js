'use strict';

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
        700
    );

    // eslint-disable-next-line no-undef
    var hammer = new Hammer(page, { preventDefault: true });
    hammer.on('swipeleft', () => switchNavigationDrawer());
}

function switchSearchField(collapse = false) {
    if (window.innerWidth < 500 || window.innerWidth >= 1000) {
        return;
    }

    header.search.getIcon().style.display = collapse ? 'block' : 'none';
    header.search.input.style.display = collapse ? 'none' : 'block';
    header.search.button.style.display = collapse ? 'none' : 'block';
}

function switchNavigationDrawer(collapse = false) {
    document.body.style.overflow = collapse ? 'visible' : 'hidden';
    navigation.wrapper.style.display = collapse ? 'none' : 'flex';
}

