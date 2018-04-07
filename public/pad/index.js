'use strict';

const searchButton = document.querySelector('.search__button_icon');
const search = document.querySelector('.search__input');

searchButton.onclick = () => {
    search.style.visibility = 'visible';
    search.focus();
};

search.onblur = () => {
    search.style.visibility = 'hidden';
};
