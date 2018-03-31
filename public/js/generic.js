(function () {
    let handlers = [
        { className: 'header__loupe', handler: focusSearch },
        { className: 'header__menu', handler: showMenu },
        { className: 'navigation__close', handler: closeMenu }
    ];


    document.addEventListener('DOMContentLoaded', function () {

        document.addEventListener('click', function (event) {
            let classes = event.target.classList;

            /* eslint-disable-next-line max-nested-callbacks */
            handlers.forEach(handler => {
                if (classes.contains(handler.className)) {
                    handler.handler();
                }
            });

            if (!classes.contains('header__input') &&
                !classes.contains('header__loupe')) {
                defocusSearch();
            }
        });

        document.addEventListener('touchstart', handleTouchStart, false);
        document.addEventListener('touchmove', handleTouchMove, false);

    });

    function focusSearch() {
        let input = document.getElementsByClassName('header__input')[0];
        input.classList.add('header__input_visible');
        input.focus();
    }

    function defocusSearch() {
        let input = document.getElementsByClassName('header__input')[0];
        input.classList.remove('header__input_visible');
    }

    function showMenu() {
        let nav = document.getElementsByClassName('navigation')[0];
        nav.classList.add('navigation_visible');
        document.body.classList.add('stop-scrolling');
    }

    function closeMenu() {
        let nav = document.getElementsByClassName('navigation')[0];
        nav.classList.remove('navigation_visible');
        document.body.classList.remove('stop-scrolling');
    }

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

        var xUp = evt.touches[0].clientX;
        var yUp = evt.touches[0].clientY;

        var xDiff = xDown - xUp;
        let yDiff = yDown - yUp;

        if (Math.abs(xDiff) > Math.abs(yDiff)) {
            if (xDiff > 0) {
                showMenu();
            } else {
                closeMenu();
            }
        }
        xDown = null;
        yDown = null;
    }

}());
