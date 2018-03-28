
const menu = document.querySelector('.header__menu');
const menuClose = document.querySelector('.nav__close');
var initialPoint;
var finalPoint;

menu.addEventListener('mouseup', function () {
    openMenu();
});

menuClose.addEventListener('mouseup', function () {
    closeMenu();
});

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
    var xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);
    var yAbs = Math.abs(initialPoint.pageY - finalPoint.pageY);
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
    nav.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeMenu() {
    const nav = document.querySelector('.nav');
    nav.style.display = 'none';
    document.body.style.overflow = 'auto';
}
