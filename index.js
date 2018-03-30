function showMenu() {
    const menu = document.getElementsByClassName('first-row__menu')[0];
    const body = document.body;
    body.style.overflow = 'hidden';
    menu.style.display = 'flex';
}

function closeMenu() {
    const menu = document.getElementsByClassName('first-row__menu')[0];
    const body = document.body;
    body.style.overflow = 'scroll';
    menu.style.display = 'none';
}

window.onload = async () => {
    // const Hammer = await document.createElement('script');

    const menuBtn = document.getElementsByClassName('title__btn')[0];
    menuBtn.addEventListener('click', showMenu, false);

    const menuClose = document.getElementsByClassName('first-row__close')[0];
    menuClose.addEventListener('click', closeMenu, false);

    const body = document.body;

    // eslint-disable-next-line no-undef
    const swipe = new Hammer(body);
    swipe.on('swipeleft', () => {
        showMenu();
    });
    swipe.on('swiperight', () => {
        closeMenu();
    });
};

