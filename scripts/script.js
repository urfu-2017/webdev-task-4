const DOM = {};

document.addEventListener('DOMContentLoaded', () => {
    init();

    DOM.searchActivator.onclick = showSearchInput;
    DOM.sandwich.onclick = showNav;
    DOM.closeButton.onclick = closeNav;
    DOM.input.onblur = resetSearchDisplay;

    // eslint-disable-next-line
    const bodyHammer = new Hammer(DOM.body);
    bodyHammer.on('swipeleft', showNav);

});

function init() {
    DOM.body = document.querySelector('body');
    DOM.searchActivator = document.querySelector('.header__search-activator');
    DOM.sandwich = document.querySelector('.sandwich');
    DOM.closeButton = document.querySelector('.nav__close-button');
    DOM.search = document.querySelector('.header__search');
    DOM.input = DOM.search.querySelector('.header__search-input');
    DOM.nav = document.querySelector('.nav');
}

function showSearchInput() {
    DOM.search.style.display = 'flex';
    DOM.searchActivator.style.display = 'none';
    DOM.input.focus();
}

function resetSearchDisplay() {
    DOM.search.style.display = '';
    DOM.searchActivator.style.display = '';
}

function showNav() {
    if (getComputedStyle(DOM.nav).display === 'none') {
        DOM.nav.style.display = 'block';
        DOM.body.style.overflowY = 'hidden';
    }
}

function closeNav() {
    DOM.nav.style.display = '';
    DOM.body.style.overflowY = '';
}
