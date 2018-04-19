const loope = document.getElementsByClassName('search_hide-checkbox')[0];
const searchField = document.getElementsByClassName('search')[0];
const input = searchField.getElementsByClassName('search__input')[0];

loope.addEventListener('click', () => {
    if (loope.checked === true) {
        searchField.classList.add('search_visible');
        searchField.classList.remove('search_hidden');
        input.focus();
        input.onblur = () => {
            searchField.classList.remove('search_visible');
            searchField.classList.add('search_hidden');
            loope.checked = false;
        };
    } else {
        searchField.classList.remove('search_visible');
        searchField.classList.add('search_hidden');
    }
});

const sandwich = document.getElementsByClassName('menu_show-button')[0];
const body = document.getElementsByClassName('body')[0];
const menu = document.getElementsByClassName('menu')[0];
const currentWidth = document.body.clientWidth;

function showMenu(e) {
    e.stopPropagation();
    menu.style.left = '50%';
    body.addEventListener('click', () => {
        menu.style.left = '100%';
        menu.classList.remove('menu_shade_end');
        menu.classList.remove('menu_display_block');
        body.classList.remove('body_scroll-lock');
    });
    menu.addEventListener('click', (eMenu) => {
        eMenu.stopPropagation();
    });
}

sandwich.addEventListener('click', e => {
    if (getComputedStyle(menu).display === 'none') {
        menu.classList.add('menu_display_block');
        body.classList.add('body_scroll-lock');
    } else {
        menu.classList.remove('menu_display_block');
        body.classList.remove('body_scroll-lock');
    }
    showMenu(e);
});

const touchMoveHandler = e => {
    if (e.changedTouches[0].pageX > (currentWidth / 2)) {
        let offsetX = (e.changedTouches[0].pageX / currentWidth) * 100;
        menu.style.left = `${offsetX}%`;
        let left = offsetX;
        menu.style.left = `${left}%`;
    }
};

const touchEndHandler = e => {
    if (e.changedTouches[0].pageX < currentWidth / 2) {
        menu.classList.add('menu_display_block');
        body.classList.add('body_scroll-lock');
        showMenu(e);
    } else {
        menu.classList.remove('menu_display_block');
        body.classList.remove('body_scroll-lock');
        menu.style.left = '100%';
    }

    document.removeEventListener('touchmove', touchMoveHandler);
    document.removeEventListener('touchend', touchEndHandler);
};

if (currentWidth <= 576) {
    document.addEventListener('touchstart', e => {
        e.stopPropagation();
        const tapPlaceX = e.changedTouches[0].pageX;
        if ((tapPlaceX / currentWidth) > 0.95) {
            menu.classList.add('menu_display_block');
            document.addEventListener('touchmove', touchMoveHandler);
            document.addEventListener('touchend', touchEndHandler);
        }
    });
}
