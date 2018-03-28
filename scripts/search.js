const searchIcon = document.querySelector('.search-icon');
const searchBar = document.querySelector('.search');
const searchInput = document.querySelector('.search__input');

searchIcon.onclick = () => {
    searchIcon.style.visibility = 'hidden';
    searchBar.style.visibility = 'visible';
    searchInput.focus();

    searchInput.onblur = () => {
        searchIcon.style.visibility = 'visible';
        searchBar.style.visibility = 'hidden';
    };
};

const button = document.querySelector('.btn-menu');
const page = document.querySelector('.page');
/* eslint-disable no-undef */
const hammer = new Hammer(page);
hammer.on('swipeleft', () => {
    button.click();
});
