

document.addEventListener('DOMContentLoaded', () => {
    const searchActivator = document.querySelector('.header__search-activator');
    searchActivator.onclick = showSearchInput;

    const sandwich = document.querySelector('.sandwich');
    sandwich.onclick = showNav;

    const closeButton = document.querySelector('.nav__close-button');
    closeButton.onclick = closeNav;


    const body = document.querySelector('body');
    // eslint-disable-next-line
    const bodyHammer = new Hammer(body);
    bodyHammer.on('swipeleft', showNav);

});

function showSearchInput(event) {
    const searchActivator = event.target;
    const search = document.querySelector('.header__search');
    const input = search.querySelector('.header__search-input');

    search.style.display = 'flex';
    searchActivator.style.display = 'none';

    input.focus();
    input.onblur = () => {
        search.style.display = '';
        searchActivator.style.display = '';
    };
}

function showNav() {
    const nav = document.querySelector('.nav');
    if (getComputedStyle(nav).display === 'none') {
        nav.style.display = 'block';

        const body = document.querySelector('body');
        body.style.overflowY = 'hidden';
    }
}

function closeNav() {
    const body = document.querySelector('body');
    const nav = document.querySelector('.nav');
    nav.style.display = '';
    body.style.overflowY = '';
}
