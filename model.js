/* eslint-disable */
function openSearch() {
    if (document.documentElement.clientWidth > 677 &&
        document.documentElement.clientWidth < 1200) {
        var el = document.getElementById('header__searchbar');
        el.style.display = 'block';
        document.getElementById('header__inputtext').focus();
    }
}

function hiddenSearch() {
    if (document.documentElement.clientWidth > 677 &&
        document.documentElement.clientWidth < 1200) {
        var el = document.getElementById('header__searchbar');
        el.style.display = 'none';
    }
}
/* eslint-enable */

let startX;
let startY;
let startTime;
const minDistanceX = 100;
const maxTime = 250;

let page = document.querySelector('.mainPart');

page.addEventListener('touchstart', function (event) {
    startX = event.changedTouches[0].pageX;
    startY = event.changedTouches[0].pageY;
    startTime = Date.now();
}, false);

page.addEventListener('touchend', function (event) {
    let distanceX = event.changedTouches[0].pageX - startX;
    let distanceY = event.changedTouches[0].pageY - startY;
    let timeElapsed = Date.now() - startTime;
    let sandwich = document.getElementById('sandwich');
    if (timeElapsed <= maxTime &&
        Math.abs(distanceX) >= minDistanceX &&
        Math.abs(distanceX) >= Math.abs(distanceY) &&
        distanceX < 0 && !sandwich.checked) {
        sandwich.click();
    }
}, false);
