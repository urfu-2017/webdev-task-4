/* eslint-disable max-depth */

document.getElementById('menu-icon').addEventListener('click', () => {
    document.getElementById('main-nav').classList.add('open-menu-mobile');
    document.getElementById('body').classList.add('overflow-hidden');
});

let initialPoint;
let finalPoint;

window.addEventListener('touchstart', event => {
    initialPoint = event.changedTouches[0];
});

window.addEventListener('touchend', event => {
    finalPoint = event.changedTouches[0];
    var xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);
    var yAbs = Math.abs(initialPoint.pageY - finalPoint.pageY);
    if (xAbs > 20 || yAbs > 20) {
        if (xAbs > yAbs) {
            if (finalPoint.pageX < initialPoint.pageX) {
                document.getElementById('main-nav').classList.add('swipe-menu-mobile',
                    'open-menu-mobile');
                document.getElementById('body').classList.add('overflow-hidden');
            } else {
                document.getElementById('main-nav').classList.remove('swipe-menu-mobile',
                    'open-menu-mobile');
                document.getElementById('body').classList.add('overflow-hidden');
            }
        }
    }
});

window.addEventListener('resize', () => {
    document.getElementById('main-nav').classList.remove('open-menu-mobile');
    document.getElementById('body').classList.remove('overflow-hidden');
});

document.getElementById('search-icon').addEventListener('click', () => {
    document.getElementById('search-field').classList.remove('hide-inputs-tablet');
});

document.getElementById('search-field').addEventListener('blur', () => {
    document.getElementById('search-field').classList.add('hide-inputs-tablet');
});

document.getElementById('close-menu').addEventListener('click', () => {
    document.getElementById('body').classList.remove('overflow-hidden');
    document.getElementById('main-nav').classList.remove('open-menu-mobile');
});
