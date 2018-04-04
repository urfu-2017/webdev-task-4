
const menu = document.querySelector('.header__menu');
const menuClose = document.querySelector('.nav__close');
let initialPoint;
let finalPoint;

menu.addEventListener('mouseup', openMenu);

menuClose.addEventListener('mouseup', closeMenu);

document.addEventListener('touchstart', function (event) {
    if (event.view.innerWidth <= 480) {
        initialPoint = event.changedTouches[0];
    }
}, false);

document.addEventListener('touchend', function (event) {
    if (event.view.innerWidth > 480) {
        return;
    }
    finalPoint = event.changedTouches[0];
    const xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);
    const yAbs = Math.abs(initialPoint.pageY - finalPoint.pageY);
    if (xAbs > 20 || yAbs > 20) {
        if (xAbs > yAbs) {
            direction();
        }
    }
}, false);

function direction() {
    if (finalPoint.pageX < initialPoint.pageX) {
        openMenu();
    } else {
        closeMenu();
    }
}

function openMenu() {
    const nav = document.querySelector('.nav');
    nav.classList.remove('nav_closed');
    nav.classList.add('nav_opened');
    document.body.classList.remove('scroll_auto');
    document.body.classList.add('scroll_hidden');
}

function closeMenu() {
    const nav = document.querySelector('.nav');
    nav.classList.remove('nav_opened');
    nav.classList.add('nav_closed');
    document.body.classList.remove('scroll_hidden');
    document.body.classList.add('scroll_auto');
}
