window.onload = () => {
    const search = document.querySelector('.header-content__search');
    const input = document.querySelector('.header-content__text-input');
    search.addEventListener('click', function () {
        search.classList.add('header-content__search-hidden');
        document.querySelector('.header-content__header')
            .classList.add('header-content__header-hidden');
        document.querySelector('.header-content__form')
            .classList.add('header-content__form-display');
        input.focus();
    });
    document.querySelector('.header-content__text-input').addEventListener('focusout', function () {
        document.querySelector('.header-content__form')
            .classList.remove('header-content__form-display');
        document.querySelector('.header-content__header')
            .classList.remove('header-content__header-hidden');
        search.classList.remove('header-content__search-hidden');
    });
    document.querySelector('.navigation-cancel').addEventListener('click', function () {
        document.querySelector('.navigation__wrapper')
            .classList.remove('navigation__wrapper-display');
        document.querySelector('body').classList.remove('scroll-hidden');
    });
    document.querySelector('.header__hamburger').addEventListener('click', function () {
        document.querySelector('.navigation__wrapper').classList.add('navigation__wrapper-display');
        document.querySelector('body').classList.add('scroll-hidden');
    });

    document.addEventListener('touchstart', handleTouchStart, false);
    document.addEventListener('touchmove', handleTouchMove, false);

    let xDown = null;
    let yDown = null;

    function handleTouchStart(evt) {
        xDown = evt.touches[0].clientX;
        yDown = evt.touches[0].clientY;
    }

    function handleTouchMove(evt) {
        if (!xDown || !yDown) {
            return;
        }

        const xUp = evt.touches[0].clientX;
        const yUp = evt.touches[0].clientY;

        const xDiff = xDown - xUp;
        const yDiff = yDown - yUp;

        if (Math.abs(xDiff) > Math.abs(yDiff)) {
            if (xDiff > 0) {
                document.querySelector('.navigation__wrapper')
                    .classList.add('navigation__wrapper-display');
                document.querySelector('body').classList.add('scroll-hidden');
            } else {
                document.querySelector('.navigation__wrapper')
                    .classList.remove('navigation__wrapper-display');
                document.querySelector('body').classList.remove('scroll-hidden');
            }
        }
        xDown = null;
        yDown = null;
    }
};
