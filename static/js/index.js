const getById = id => document.getElementById(id);

const showMenu = () => {
    document.body.className = '';
    getById('menu').className = 'menu';
};

const closeMenu = () => {
    document.body.className = 'body__mobile-menu-hide';
    getById('menu').className = 'menu menu__mobile-menu-hide';
};

let touchX = 0;
let touchY = 0;

const onSwipe = (x, y) => {
    const dy = Math.abs(touchY - y);
    const dx = Math.abs(touchX - x);
    const isNotRandomness = dy * 2 < dx && dx > 100;
    if (x < touchX && isNotRandomness) {
        showMenu();
    }

    if (x > touchX && isNotRandomness) {
        closeMenu();
    }
};

window.onload = () => {
    const checkbox = getById('search-tablet__show');
    const input = getById('search-tablet__input');
    const menuShowButton = getById('header__menu-button');
    const menuCloseButton = getById('menu__mobile-close');

    input.setAttribute('disabled', true);

    checkbox.onchange = () => {
        if (checkbox.checked) {
            input.setAttribute('disabled', true);
        } else {
            input.removeAttribute('disabled');
        }
        input.focus();
    };

    input.onblur = () => checkbox.click();

    menuShowButton.onclick = showMenu;

    menuCloseButton.onclick = closeMenu;

    document.body.ontouchstart = e => {
        touchX = e.changedTouches[0].screenX;
        touchY = e.changedTouches[0].screenY;
    };

    document.body.ontouchend = e => {
        onSwipe(e.changedTouches[0].screenX, e.changedTouches[0].screenY);
    };
};
