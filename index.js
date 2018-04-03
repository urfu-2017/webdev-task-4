document.querySelector('.header__search-icon').addEventListener('click', (e) => {
    e.target.style.visibility = 'hidden';
    document.querySelector('.header__search').style.display = 'flex';
    document.querySelector('.header__search__input').focus();
});

document.querySelector('.header__search__input').addEventListener('blur', () => {
    if (window.matchMedia('(max-width: 820px)').matches) {
        document.querySelector('.header__search-icon').style.visibility = 'visible';
        document.querySelector('.header__search').style.display = 'none';
    }
});

document.querySelector('.menu__close-icon').addEventListener('click', () => {
    document.querySelector('.menu').style.display = 'none';
});

document.querySelector('.header__menu-btn').addEventListener('click', () => {
    document.querySelector('.menu').style.display = 'block';
});
