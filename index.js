const $ = cls => document.querySelector(`.${cls}`);
const searchButton = $('header-searchbar-btn');
const searchInput = $('header-searchbar-input');
const breadButton = $('bread');
const nav = $('nav');
const closeButton = $('nav-close-btn');
const ENTER_KEYCODE = 13;

searchInput.onkeydown = e => {
    if (e.keyCode === ENTER_KEYCODE) {
        searchButton.click();
    }
};

searchButton.onclick = () => {
    if (!searchInput.value.trim()) {
        searchInput.focus();
    } else {
        console.info(`Searching for "${searchInput.value}"`);
    }
};

const toggleNav = () => nav.classList.toggle('display');

breadButton.onclick = toggleNav;
closeButton.onclick = toggleNav;

let touchX = 0;

document.ontouchstart = e => {
    const touch = e.touches[0];
    if (!touch) {
        return;
    }
    touchX = touch.clientX;
};

document.ontouchmove = e => {
    const touch = e.touches[0];
    if (!touch) {
        return;
    }
    const isOpened = nav.classList.contains('display');
    const dx = (touch.clientX - touchX) * (isOpened ? 1 : -1);
    if (dx > 40) {
        toggleNav();
    }
};
