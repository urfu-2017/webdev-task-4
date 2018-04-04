const MAX_MOBILE_WIDTH = 767;
const MAX_RIGHT_INDENT = 20;
const SWIPE_WIDTH = 40;

let startTouch = Number.NEGATIVE_INFINITY;
let width;


window.addEventListener('load', trySetTabletHandlers);

window.addEventListener('resize', trySetTabletHandlers);


function trySetTabletHandlers() {
    width = document.documentElement.clientWidth || window.screen.width;
    document.body.classList.remove('body__overflow_hidden');
    const navigation = document.querySelector('.navigation');
    if (width > MAX_MOBILE_WIDTH) {
        navigation.classList.remove('navigation__display_none');
        document.removeEventListener('touchstart', handleTouchStart);
        document.removeEventListener('touchend', handlerTouchEnd);

        return;
    }
    navigation.classList.add('navigation__display_none');
    const hamburger = document.querySelector('.search__hamburger');
    hamburger.addEventListener('click', showNavigation);
    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchend', handlerTouchEnd);
}

function handleTouchStart(event) {
    const x = event.changedTouches[0].screenX;
    if (width - x <= MAX_RIGHT_INDENT) {
        startTouch = x;
    } else {
        startTouch = Number.NEGATIVE_INFINITY;
    }
}

function handlerTouchEnd(event) {
    const x = event.changedTouches[0].screenX;
    if (x < startTouch && SWIPE_WIDTH <= startTouch - x) {
        showNavigation();
    }
}

function showNavigation() {
    const navigation = document.querySelector('.navigation');
    navigation.classList.remove('navigation__display_none');
    document.body.classList.add('body__overflow_hidden');
    const navigationClose = document.querySelector('.navigation__close');
    navigationClose.addEventListener('click', hiddenNavigation);
}

function hiddenNavigation() {
    const navigation = document.querySelector('.navigation');
    navigation.classList.add('navigation__display_none');
    document.body.classList.remove('body__overflow_hidden');
    const navigationClose = document.querySelector('.navigation__close');
    navigationClose.removeEventListener('click', hiddenNavigation);
}
