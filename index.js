window.onload = function () {
    const searchInput = document.querySelector('.search__input');

    document.querySelector('.search__button').onclick = () => {
        searchInput.classList.add('search__input_activated');
        searchInput.focus();
    };
    searchInput.onblur = () => {
        searchInput.classList.remove('search__input_activated');
    };

    const menu = document.querySelector('.menu');

    document.querySelector('.header__btn-sandwich').onclick = () => showMenu(true);
    document.querySelector('.menu__btn-close').onclick = (event) => {
        showMenu(false);
        event.stopPropagation();
    };

    const page = document.querySelector('.page');

    let startX;

    page.ontouchstart = event => {
        startX = event.changedTouches[0].pageX;
        if (window.innerWidth - startX > 30) {
            startX = null;
        }
    };

    page.ontouchmove = event => {
        if (startX) {
            event.preventDefault();
        }
    };

    page.ontouchend = event => {
        const showCondition = startX && startX - event.changedTouches[0].pageX > 100;
        showMenu(showCondition);
        if (showCondition) {
            event.preventDefault();
        }
        startX = null;
    };

    function showMenu(show) {
        menu.classList.remove('menu_opened');
        if (show) {
            menu.classList.add('menu_opened');
            disableScroll();
        } else {
            enableScroll();
        }
    }

    function disableScroll() {
        document.body.classList.add('body_no-scroll');
        window.onscroll = (e) => e.preventDefault();
    }

    function enableScroll() {
        document.body.classList.remove('body_no-scroll');
        window.onscroll = null;
    }
};

