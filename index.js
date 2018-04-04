const searchButton = document.querySelector('.heading__search-btn');
searchButton.addEventListener('click', function () {
    document.querySelector('.heading__search-line').focus();
});
const navigationCloseButton = document.querySelector('.navigaton__close-button');
const sandwichButton = document.querySelector('.sandwich__button');


let swipeState = {
    startX: undefined,
    startY: undefined,
    endX: undefined,
    endY: undefined,

    getResult: function () {
        const offsetX = this.endX - this.startX;
        const offsetY = this.endY - this.startY;
        if (Math.abs(offsetX) > 75 && Math.abs(offsetY) < 50) {
            return Math.sign(offsetX);
        }

        return 0;
    },

    reset: function () {
        this.startX = undefined;
        this.startY = undefined;
        this.endX = undefined;
        this.endY = undefined;
    }
};

function closeMenu() {
    document.querySelector('.navigation-wrapper').style.display = 'none';
    navigationCloseButton.style.display = 'none';
}

function openMenu() {
    document.querySelector('.navigation-wrapper').style.display = 'block';
    navigationCloseButton.style.display = 'block';
}

if (window.innerWidth < 600) {

    document.addEventListener('touchstart', function (e) {
        swipeState.startX = e.touches[0].clientX;
        swipeState.startY = e.touches[0].clientY;
    });

    document.addEventListener('touchmove', function (e) {
        swipeState.endX = e.touches[0].clientX;
        swipeState.endY = e.touches[0].clientY;
        const swipeResult = swipeState.getResult();
        if (swipeResult === -1) {
            openMenu();
        }
        if (swipeResult === 1) {
            closeMenu();
        }
    });

    document.addEventListener('touchend', function () {
        swipeState.reset();
    });

    sandwichButton.addEventListener('click', openMenu);
    navigationCloseButton.addEventListener('click', closeMenu);
}
