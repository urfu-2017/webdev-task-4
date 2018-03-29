'use strict';
const nav = document.querySelector('.nav');
const showNav = () => {
    nav.className = 'nav white-block center visible';
};

const hideNav = () => {
    nav.className = 'nav white-block center hidden';
};

const sandwichButton = document.querySelector('.phone-sandwich');
const closeButton = document.querySelector('.nav__close');
sandwichButton.addEventListener('click', showNav);
closeButton.addEventListener('click', hideNav);
