window.onload = () => {
    const burgerMenu = document.querySelector('.header__burger');
    const navigationClose = document.querySelector('.navigation__close');
    const navigation = document.querySelector('.navigation');
    const search = document.querySelector('.search');
    const searchInput = document.querySelector('.search__input');
    const searchIcon = document.querySelector('.header__search-icon');

    burgerMenu.onclick = () => {
        navigation.style.display = 'flex';
    };

    navigationClose.onclick = () => {
        navigation.style.display = 'none';
    };

    searchIcon.onclick = () => {
        search.style.display = 'flex';
        searchIcon.classList.remove('fa-search');
    };

    searchInput.onblur = () => {
        search.style.display = 'none';
        searchIcon.classList.add('fa-search');
    };
};
