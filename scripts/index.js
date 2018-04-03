'use strict';

const searchInput = document.getElementsByClassName('search_input')[0];
const searchButton = document.getElementsByClassName('search_button')[0];

searchButton.onclick = function () {
    if (getComputedStyle(searchInput).visibility === 'hidden') {
        searchInput.style.visibility = 'visible';
        searchInput.focus();
        searchInput.onblur = function () {
            searchInput.style.visibility = 'hidden';
        };
    }
};

const sandwichButton = document.getElementsByClassName('sandwich')[0];
const exitButton = document.getElementsByClassName('menu_exit')[0];
const menu = document.getElementsByClassName('menu')[0];
const body = document.querySelector('body');

exitButton.onclick = function () {
    menu.style.display = 'none';
    body.style.overflow = 'scroll';
};

sandwichButton.onclick = function () {
    menu.style.display = 'block';
    exitButton.style.display = 'block';
    body.style.overflow = 'hidden';
};

// eslint-disable-next-line no-undef
var hammer = new Hammer(body, { preventDefault: true });
hammer.on('swipeleft', () => {
    menu.style.display = 'block';
    exitButton.style.display = 'block';
});
