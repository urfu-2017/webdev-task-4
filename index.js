window.onload = () => {
    const burgerMenu = document.querySelector('.header__burger');
    const navigationClose = document.querySelector('.navigation__close');
    const navigation = document.querySelector('.navigation');

    burgerMenu.onclick = () => {
        navigation.style.display = 'flex';
    };

    navigationClose.onclick = () => {
        navigation.style.display = 'none';
    };
};
