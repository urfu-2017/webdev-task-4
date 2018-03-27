const sandwich = document.querySelector('.sandwich');
const categories = document.querySelector('.categories');
const body = document.body;

let state = {
    xStart: undefined,
    yStart: undefined,
    xOffset: undefined,
    yOffset: undefined,
    areCategoriesShown: false,
    isLeftSwipe: function () {
        return Math.abs(this.xOffset) > 4 * Math.abs(this.yOffset) && this.xOffset > 0;
    },
    isRightSwipe: function () {
        return Math.abs(this.xOffset) > 4 * Math.abs(this.yOffset) && this.xOffset < 0;
    },
    reset: function () {
        this.xStart = undefined;
        this.yStart = undefined;
        this.xOffset = undefined;
        this.yOffset = undefined;
    }
};

sandwich.addEventListener('click', toggleCategories);

document.addEventListener('touchstart', function (event) {
    state.xStart = event.touches[0].clientX;
    state.yStart = event.touches[0].clientY;
});

document.addEventListener('touchmove', function (event) {
    state.xOffset = state.xStart - event.touches[0].clientX;
    state.yOffset = state.yStart - event.touches[0].clientY;

    if (state.isLeftSwipe() && !state.areCategoriesShown) {
        categories.style.width = `${state.xOffset}px`;
    } else if (state.isRightSwipe() && state.areCategoriesShown) {
        categories.style.width = `calc(60% + ${state.xOffset}px)`;
    }
});

document.addEventListener('touchend', function () {
    categories.style.width = '';

    if (state.isLeftSwipe() && !state.areCategoriesShown) {
        toggleCategories();
    } else if (state.isRightSwipe() && state.areCategoriesShown) {
        toggleCategories();
    }

    state.reset();
});

function toggleCategories() {
    state.areCategoriesShown = !state.areCategoriesShown;
    sandwich.classList.toggle('sandwich-expanded');
    categories.classList.toggle('categories-expanded');
    body.classList.toggle('disable-touch');
}
