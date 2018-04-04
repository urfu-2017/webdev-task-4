const MAX_TABLET_WIDTH = 1239;
const MIN_TABLET_WIDTH = 768;


window.addEventListener('load', trySetTabletHandlers);

window.addEventListener('resize', trySetTabletHandlers);


function trySetTabletHandlers() {
    const width = document.documentElement.clientWidth || window.screen.width;
    const searchInput = document.querySelector('.search__input');
    const searchButtonTablet = document.querySelector('.search__tablet');
    if (!(width >= MIN_TABLET_WIDTH && width <= MAX_TABLET_WIDTH)) {
        setCommonPage();
        searchButtonTablet.removeEventListener('click', handlerOnClick);
        searchInput.removeEventListener('blur', handlerOnBlur);

        return;
    }
    setTabletDefaultPage();
    searchButtonTablet.addEventListener('click', handlerOnClick);
}


function handlerOnClick() {
    setCommonPage();
    const searchInput = document.querySelector('.search__input');
    searchInput.focus();
    searchInput.addEventListener('blur', handlerOnBlur);
}

function handlerOnBlur() {
    const searchInput = document.querySelector('.search__input');
    searchInput.value = '';
    searchInput.removeEventListener('blur', handlerOnBlur);
    setTabletDefaultPage();
}

function setTabletDefaultPage() {
    const searchInput = document.querySelector('.search__input');
    const searchButtonTablet = document.querySelector('.search__tablet');
    searchInput.classList.add('search__input_hidden');
    searchButtonTablet.classList.remove('search__tablet_hidden');
}

function setCommonPage() {
    const searchInput = document.querySelector('.search__input');
    const searchButtonTablet = document.querySelector('.search__tablet');
    searchInput.classList.remove('search__input_hidden');
    searchButtonTablet.classList.add('search__tablet_hidden');
    searchInput.value = '';
}
