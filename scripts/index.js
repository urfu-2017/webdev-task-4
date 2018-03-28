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

const sandwitchButton = document.getElementsByClassName('sandwitch')[0];
const exitButton = document.getElementsByClassName('menu_exit')[0];
const menu = document.getElementsByClassName('menu')[0];

exitButton.onclick = function () {
    menu.style.display = 'none';
};

sandwitchButton.onclick = function () {
    menu.style.display = 'block';
    exitButton.style.display = 'block';
};

const main = document.querySelector('.main');
// eslint-disable-next-line no-undef
var hammer = new Hammer(main, { preventDefault: true });
hammer.on('swipeleft', () => {
    menu.style.display = 'block';
    exitButton.style.display = 'block';
});
