const img = document.querySelector('.header__img');
const search = document.querySelector('.header__input');
const burger = document.querySelector('.header__burger');
const nav = document.querySelector('.nav');
const closeEl = document.querySelector('.nav__img');
const tabletMin = 700;
const tabletMax = 1100;

function click() {
    search.classList.add('visibility_visible');
    search.focus();
    img.classList.add('visibility_hidden');
}

function blur() {
    if (window.innerWidth > tabletMin && window.innerWidth < tabletMax) {
        search.classList.remove('visibility_visible');
        img.classList.remove('visibility_hidden');
    }
}

function show() {
    if (window.innerWidth < tabletMin) {
        nav.classList.add('display_block');
    }
    document.body.classList.add('overflow_hidden');
}

function close() {
    if (window.innerWidth < tabletMin) {
        nav.classList.remove('display_block');
    }
    document.body.classList.remove('overflow_hidden');
}

function touchMove() {
    let initialPoint;
    let finalPoint;
    document.addEventListener('touchstart', function (event) {
        event.stopPropagation();
        initialPoint = event.changedTouches[0];
    }, false);
    document.addEventListener('touchend', function (event) {
        event.stopPropagation();
        finalPoint = event.changedTouches[0];
        let xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);
        let yAbs = Math.abs(initialPoint.pageY - finalPoint.pageY);
        if (xAbs > yAbs) {
            if (finalPoint.pageX < initialPoint.pageX) {
                show();
            } else {
                close();
            }
        }
    }, false);
}

img.addEventListener('click', click);
search.addEventListener('blur', blur);
burger.addEventListener('click', show);
closeEl.addEventListener('click', close);
document.addEventListener('DOMContentLoaded', touchMove);
