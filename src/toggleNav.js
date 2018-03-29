'use strict';
const nav = document.querySelector('.nav');

const fixed = document.querySelector('.body');

const showNav = () => {
    nav.className = 'nav white-block center visible';
    fixed.classList = 'body noScroll';
};

const hideNav = () => {
    nav.className = 'nav white-block center hidden';
    fixed.classList = 'body';
};


const sandwichButton = document.querySelector('.phone-sandwich');
const closeButton = document.querySelector('.nav__close');
sandwichButton.addEventListener('click', showNav);
sandwichButton.addEventListener('touchend', showNav);
closeButton.addEventListener('click', hideNav);
closeButton.addEventListener('touchend', hideNav);

