'use strict';

let tabletInput = document.getElementsByClassName('search-form-tablet__input')[0];
let mobileInput = document.getElementsByClassName('search-form-mobile__input')[0];
let navigation = document.getElementsByClassName('navigation')[0];
let buter = document.getElementsByClassName('header__menu-button')[0];
let tabletSearchButton = document.getElementsByClassName('search-form-tablet__button')[0];
let navigationCloseButton = document.getElementsByClassName('navigation__close-button')[0];
let body = document.body;

function activateNavigation() {
    navigation.style.display = 'flex';
    body.style.overflow = 'hidden';
    mobileInput.setAttribute('disabled', 'disabled');
}

function disActivateNavigation() {
    navigation.style.display = 'none';
    body.style.overflow = '';
    mobileInput.removeAttribute('disabled');
}

function activateInput() {
    tabletInput.style.visibility = 'visible';
    tabletInput.focus();
}

function disActivateInput() {
    tabletInput.style.visibility = 'hidden';
}

let startX;
let startY;
let distX;
let distY;
let minDistX = 100;
let startTime;
let timeElapsed;
let maxTime = 250;

body.addEventListener('touchstart', function (e) {
    startX = e.changedTouches[0].pageX;
    startY = e.changedTouches[0].pageY;
    startTime = Date.now();
}, false);

body.addEventListener('touchend', function (e) {
    distX = e.changedTouches[0].pageX - startX;
    distY = e.changedTouches[0].pageY - startY;
    timeElapsed = Date.now() - startTime;
    if (timeElapsed <= maxTime &&
        Math.abs(distX) >= minDistX &&
        Math.abs(distX) >= Math.abs(distY) &&
        distX < 0) {
        activateNavigation();
    }
}, false);


tabletSearchButton.addEventListener('click', activateInput);
tabletInput.addEventListener('focusout', disActivateInput);

buter.addEventListener('click', activateNavigation);
navigationCloseButton.addEventListener('click', disActivateNavigation);
