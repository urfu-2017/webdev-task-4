'use strict';
(function () {
    const ACTIVATION_THRESHOLD = 200;
    const TIMEOUT = 750;

    document.addEventListener('DOMContentLoaded', function () {
        const $page = document.querySelector('.page');
        const $pageMenu = document.querySelector('.page__menu');
        const $pageMenuClose = document.querySelector('.page__menu-close-button');
        const $hamburger = document.querySelector('.head__hamburger');

        initClickEvents();
        initTouchEvents();


        function initTouchEvents() {
            let startX;
            let startTime;

            $page.addEventListener('touchstart', function (e) {
                startX = e.changedTouches[0].pageX;
                startTime = Date.now();
            }, false);

            $page.addEventListener('touchend', function (e) {
                const distX = e.changedTouches[0].pageX - startX;
                const timeElapsed = Date.now() - startTime;
                if (timeElapsed <= TIMEOUT &&
                    Math.abs(distX) >= ACTIVATION_THRESHOLD &&
                    distX < 0) {
                    $hamburger.classList.add('hamburger_active');
                    $pageMenu.classList.add('page__menu_active');
                }
            }, false);
        }

        function initClickEvents() {
            $hamburger.addEventListener('click', function () {
                $hamburger.classList.toggle('hamburger_active');
                $pageMenu.classList.toggle('page__menu_active');
                $page.classList.toggle('page_scrollable_no');
            }, false);

            $pageMenuClose.addEventListener('click', function () {
                $hamburger.classList.remove('hamburger_active');
                $pageMenu.classList.remove('page__menu_active');
                $page.classList.remove('page_scrollable_no');
            }, false);
        }
    });
}());

