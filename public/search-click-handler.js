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

function showMenu(e) {
    e.stopPropagation();
    menu.style.height = `${height}px`;
    if (getComputedStyle(menu).display === 'none') {
        menu.style.display = 'block';
        body.style['overflow-y'] = 'hidden';
    } else {
        menu.style.display = 'none';
        body.style['overflow-y'] = 'auto';
    }
    body.addEventListener('click', () => {
        if (getComputedStyle(menu).display === 'block') {
            menu.style.display = 'none';
            body.style['overflow-y'] = 'auto';
        }
    });
    menu.addEventListener('click', (eMenu) => {
        eMenu.stopPropagation()
    });
}

sandwich.addEventListener('click', showMenu);

if (document.body.clientWidth <= 576) {
    const currentWidth = document.body.clientWidth;
    document.addEventListener('touchstart', e1 => {
        console.log(1)
        
        const tapPlaceX = e1.changedTouches[0].pageX;
        if ((tapPlaceX / currentWidth) > 0.95) {
            document.addEventListener('touchend', e2 => {
                const unTapPlaceX = e2.changedTouches[0].pageX;
                if ((tapPlaceX - unTapPlaceX) * 4 > currentWidth){
                    showMenu(e2);
                }
            });
        }
    });
}