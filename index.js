const img = document.getElementsByClassName('header__img')[0];
const search = img.previousElementSibling;
const burger = document.getElementsByClassName('header__burger')[0];
const nav = document.getElementsByClassName('nav')[0];
const closeEl = document.getElementsByClassName('nav__img')[0];

function click() {
    search.style.visibility = 'visible';
    search.focus();
    img.style.visibility = 'hidden';
}

function blur() {
    if (window.innerWidth > 700 && window.innerWidth < 1100) {
        img.style.visibility = 'visible';
        search.style.visibility = 'hidden';
    }
}

function show() {
    if (window.innerWidth < 700) {
        nav.style.display = 'block';
    }
    document.body.style.overflow = 'hidden';
}

function close() {
    if (window.innerWidth < 700) {
        nav.style.display = 'none';
    }
    document.body.style.overflow = 'auto';
}

function touchMove() {
    var initialPoint;
    var finalPoint;
    document.addEventListener('touchstart', function (event) {
        event.stopPropagation();
        initialPoint = event.changedTouches[0];
    }, false);
    document.addEventListener('touchend', function (event) {
        event.stopPropagation();
        finalPoint = event.changedTouches[0];
        var xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);
        var yAbs = Math.abs(initialPoint.pageY - finalPoint.pageY);
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
