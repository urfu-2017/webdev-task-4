const SWIPE_BORDER = 40;

const state = {
    navigation: false,
    touchStartX: null,
    search: false
}

window.onload = () => {
    const hamburger = document.querySelector('.hamburger');
    const navigation = document.querySelector('.navigation');
    const searchButtonTablet = document.querySelector('.search__button-tablet');
    const searchInput = document.querySelector('.search__input');

    function toggleNavigation() {
        if (state.navigation) {
            hamburger.classList.remove('hamburger_open');
            navigation.classList.remove('navigation_visible');
            state.navigation = false;
        } else {
            hamburger.classList.add('hamburger_open')
            navigation.classList.add('navigation_visible');
            state.navigation = true;
        }
    }

    hamburger.addEventListener('click', () => {
        toggleNavigation();
    })

    window.addEventListener('touchstart', e => {
        state.touchStartX = e.changedTouches[0].screenX;
    });

    window.addEventListener('touchend', e => {
        const touchEndX = e.changedTouches[0].screenX;
        const swipeLenght = state.touchStartX - touchEndX;

        if (!state.navigation && swipeLenght > SWIPE_BORDER) {
            toggleNavigation();
        } else if (state.navigation && swipeLenght < -SWIPE_BORDER) {
            toggleNavigation();
        }
    });

    searchButtonTablet.addEventListener('click', () => {
        if (!state.search) {
            searchInput.classList.add('search__input_visible');
            searchInput.focus();
            state.search = true;
        }
    });

    searchInput.addEventListener('focusout', e => {
        searchInput.classList.remove('search__input_visible');
        state.search = false;
        e.target.value = '';
    });
}
