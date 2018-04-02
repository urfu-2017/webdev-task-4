window.onload = () => {
    let search = document.querySelector('.header-content__search');
    let input = document.querySelector('.header-content__text-input');
    search.addEventListener('click', function () {
        search.classList.add('hidden');
        document.querySelector('.header-content__header').classList.add('hidden');
        document.querySelector('.header-content__form').classList.add('display');
        input.focus();
    });
    document.querySelector('.header-content__text-input').addEventListener('focusout', function () {
        document.querySelector('.header-content__form').classList.remove('display');
        document.querySelector('.header-content__header').classList.remove('hidden');
        search.classList.remove('hidden');
    });
    document.querySelector('.navigation-cancel').addEventListener('click', function () {
        document.querySelector('.navigation__wrapper').classList.remove('display');
        document.querySelector('body').classList.remove('scroll-hidden');
    });
    document.querySelector('.header__hamburger').addEventListener('click', function () {
        document.querySelector('.navigation__wrapper').classList.add('display');
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

        let xUp = evt.touches[0].clientX;
        let yUp = evt.touches[0].clientY;

        let xDiff = xDown - xUp;
        let yDiff = yDown - yUp;

        if (Math.abs(xDiff) > Math.abs(yDiff)) {
            if (xDiff > 0) {
                document.querySelector('.navigation__wrapper').classList.add('display');
                document.querySelector('body').classList.add('scroll-hidden');
            }
        }
        xDown = null;
        yDown = null;
    }
};
