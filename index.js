let startX = 0;
let endX = 0;

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.header__search').addEventListener('click', showSearch);

    document.querySelector('.header__menu').addEventListener('click', showMenu);

    document.querySelector('.menu_close').addEventListener('click', closeMenu);

    document.querySelector('html').addEventListener('touchstart', event => {
        startX = event.changedTouches[0].clientX;
    });

    document.querySelector('html').addEventListener('touchend', event => {
        endX = event.changedTouches[0].clientX;
        if (endX < startX) {
            showMenu();
        }
    });
});

function showSearch() {
    const search = document.querySelector('.header__search');
    search.style.display = 'none';

    const form = document.querySelector('.search');
    form.style.display = 'block';

    form.firstElementChild.focus();

    form.firstElementChild.onblur = () => {
        search.style.display = 'block';
        form.style.display = 'none';
    };
    form.firstElementChild.style.display = 'block';
    form.lastElementChild.style.display = 'none';
}

function showMenu() {
    const menu = document.querySelector('.menu');
    menu.style.display = 'flex';
    const menuClose = document.querySelector('.menu_close');
    menuClose.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeMenu() {
    const menu = document.querySelector('.menu');
    menu.style.display = 'none';
    document.body.style.overflow = 'scroll';
}
