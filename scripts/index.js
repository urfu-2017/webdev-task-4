'use strict';

const searchInput = document.getElementsByClassName('search_input')[0];
const searchButton = document.getElementsByClassName('search_button')[0];
let flag = 0;

searchButton.onclick = function () {
    if (searchInput.style.visibility === '' || searchInput.style.visibility === 'hidden') {
        searchInput.style.visibility = 'visible';
        searchInput.focus();
        searchInput.onblur = function () {
            searchInput.style.visibility = 'hidden';
        }
    }
};
