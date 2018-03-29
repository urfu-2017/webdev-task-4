const MAX_MOBILE_WIDTH = 767;
const MAX_RIGHT_INDENT = 20;
const SWIPE_WIDTH = 40;

window.addEventListener('load', () => {
    const width = window.screen.width || document.documentElement.clientWidth;
    if (width > MAX_MOBILE_WIDTH) {
        return;
    }
    const hamburger = document.querySelector('.search_menu_mobile');
    hamburger.addEventListener('click', () => showNavigation());
    let startTouch = Number.NEGATIVE_INFINITY;
    document.addEventListener('touchstart', event => {
        const x = event.changedTouches[0].screenX;
        if (width - x <= MAX_RIGHT_INDENT) {
            startTouch = x;
        } else {
            startTouch = Number.NEGATIVE_INFINITY;
        }
    });
    document.addEventListener('touchend', event => {
        const x = event.changedTouches[0].screenX;
        if (x < startTouch && SWIPE_WIDTH <= startTouch - x) {
            showNavigation();
        }
    });
});

function showNavigation() {
    const navigation = document.querySelector('.navigation');
    navigation.style.display = 'block';
    document.body.style.overflow = 'hidden';
    const navigationClose = document.querySelector('.navigation__close');
    navigationClose.addEventListener('click', () => {
        navigation.style.display = 'none';
        document.body.style.overflow = '';
    });
}
