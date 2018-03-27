'use strict';
/*  eslint-disable no-lonely-if  */
let input = document.getElementsByClassName('search-form-tablet__input')[0];
let navigation = document.getElementsByClassName('navigation')[0];
let buter = document.getElementsByClassName('header__menu-button')[0];

document.getElementsByClassName('search-form-tablet__button')[0]
    .addEventListener('click', function () {
        input.style.visibility = 'visible';
        input.focus();
    });

input.addEventListener('focusout', function () {
    input.style.visibility = 'hidden';
});

buter.addEventListener('click', activateNavigation);

document.getElementsByClassName('navigation__close-button')[0]
    .addEventListener('click', function () {
        navigation.style.display = 'none';
        document.body.style.overflow = '';
    });

function activateNavigation() {
    navigation.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}
