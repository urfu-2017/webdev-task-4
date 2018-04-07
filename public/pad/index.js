'use strict';

const searchButton = document.querySelector('.search__button_icon');
const search = document.getElementById('search');

searchButton.onclick = () => {
    search.style.visibility = 'visible';
    search.focus();
};

search.onblur = () => {
    search.style.visibility = 'hidden';
};
