const ofClass = cls => document.querySelector(`.${cls}`);
const searchButton = ofClass('header-searchbar-btn');
const searchInput = ofClass('header-searchbar-input');
const breadButton = ofClass('bread');
const nav = ofClass('nav');
const closeButton = ofClass('nav-close-btn');

const onEnter = (elem, promise) => {
    elem.onkeydown = async e => {
        if (e.keyCode === 13) {
            await promise();
        }
    };
};

onEnter(searchInput, async () => {
    searchButton.click();
});

searchButton.onclick = () => {
    if (!searchInput.value) {
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
