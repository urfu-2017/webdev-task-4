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

const souvenirsRatings = document.getElementsByClassName('souvenirs_item_info_rating');
for (let i = 0; i < souvenirsRatings.length; i++) {
    if (Number(souvenirsRatings[i].innerHTML) > 4) {
        souvenirsRatings[i].style.backgroundColor = 'green';
    } else {
        souvenirsRatings[i].style.backgroundColor = 'yellowgreen';
    }
}

let touchstartX = 0;
let touchendX = 0;

body.ontouchstart = function (event) {
    touchstartX = event.changedTouches[0].screenX;
};

body.ontouchend = function (event) {
    touchendX = event.changedTouches[0].screenX;
    handleGesture();
};

function handleGesture() {
    if (touchendX < touchstartX && getComputedStyle(menu).display === 'none') {
        menu.style.display = 'block';
        exitButton.style.display = 'block';
    }
}
