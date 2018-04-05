document.querySelector('.header__search-icon').addEventListener('click', () => {
    document.querySelector('.header__search-icon').classList.add('header__search-icon_hidden');
    document.querySelector('.header-search').classList.remove('header-search_hidden');
    document.querySelector('.header-search__input').focus();
});

document.querySelector('.header-search__input').addEventListener('blur', () => {
    if (window.matchMedia('(min-width: 500px) and (max-width: 820px)').matches) {
        document.querySelector('.header__search-icon').classList
            .remove('header__search-icon_hidden');
        document.querySelector('.header-search').classList.add('header-search_hidden');
    }
});

document.querySelector('.menu__close-icon').addEventListener('click', () => {
    document.querySelector('.menu').classList.add('menu_hidden');
    document.body.style.overflow = '';
});

document.querySelector('.header__menu-btn').addEventListener('click', () => {
    showMobileMenu();
});

if (window.matchMedia('(min-width: 500px) and (max-width: 820px)').matches) {
    document.querySelector('.header-search').classList.add('header-search_hidden');
    document.querySelector('.header__search-icon').classList.remove('header__search-icon_hidden');
}

let touched = false;

if (window.matchMedia('(max-width: 500px)').matches) {
    document.querySelector('.menu').classList.add('menu_hidden');
    document.querySelector('.content').addEventListener('touchstart', handleStart);
    document.querySelector('.content').addEventListener('touchend', handleEnd);
    document.querySelector('.content').addEventListener('touchmove', handleMove);
}

function handleStart(e) {
    const touches = e.changedTouches;
    if (touches.length !== 1) {
        return;
    }
    const touch = touches[0];

    if (touch.pageX > window.innerWidth * 0.9) {
        touched = true;
    }
}

function handleEnd() {
    touched = false;
}

function handleMove(e) {
    if (!touched) {
        return;
    }
    const touches = e.changedTouches;
    if (touches.length !== 1) {
        return;
    }
    const touch = touches[0];

    if (touch.pageX < window.innerWidth * 0.7) {
        touched = false;
        showMobileMenu();
    }
}

function showMobileMenu() {
    document.querySelector('.menu').classList.remove('menu_hidden');
    document.body.style.overflow = 'hidden';
}
