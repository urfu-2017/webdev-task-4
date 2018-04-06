const loope = document.getElementsByClassName('search_hide-checkbox')[0];
const searchField = document.getElementsByClassName('search')[0];
const input = searchField.getElementsByClassName('search__input')[0];

loope.addEventListener('click', () => {
    if (loope.checked === true) {
        searchField.style.display = 'flex';
        input.focus();
        input.onblur = () => {
            searchField.style.display = 'none';
            loope.checked = false;
        };
    } else {
        searchField.style.display = 'none';
    }
});

const sandwich = document.getElementsByClassName('menu_show-button')[0];
const body = document.getElementsByClassName('body')[0];
const menu = document.getElementsByClassName('menu')[0];
const height = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
);
const currentWidth = document.body.clientWidth;

function showMenu(e) {
    e.stopPropagation();
    menu.style.height = `${height}px`;
    menu.style.width = '50%';
    menu.style.left = '50%';
    body.addEventListener('click', () => {
        menu.style.display = 'none';
        body.style['overflow-y'] = 'auto';
    });
    menu.addEventListener('click', (eMenu) => {
        eMenu.stopPropagation();
    });
}

sandwich.addEventListener('click', (e) => {
    if (getComputedStyle(menu).display === 'none') {
        menu.style.display = 'block';
        body.style['overflow-y'] = 'hidden';
    } else {
        menu.style.display = 'none';
        body.style['overflow-y'] = 'auto';
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
        menu.style.display = 'block';
        body.style['overflow-y'] = 'hidden';
    } else {
        menu.style.display = 'none';
        body.style['overflow-y'] = 'auto';
    }
    showMenu(e);
    document.removeEventListener('touchmove', touchMoveHandler);
    document.removeEventListener('touchend', touchEndHandler);
};

if (currentWidth <= 576) {
    document.addEventListener('touchstart', e => {
        e.stopPropagation();
        const tapPlaceX = e.changedTouches[0].pageX;
        if ((tapPlaceX / currentWidth) > 0.95) {
            menu.style.height = `${height}px`;
            menu.style['overflow-x'] = 'hidden';
            menu.style.display = 'block';
            // menu.style.width = '0%';
            menu.style.left = '100%';
            menu.style.border = 'none';
            document.addEventListener('touchmove', touchMoveHandler);
            document.addEventListener('touchend', touchEndHandler);
        }
    });
}
