var touchStartX = 0;
var touchEndX = 0;
document.addEventListener('touchstart', function (e) {
    touchStartX = e.changedTouches[0].screenX;
});
document.addEventListener('touchend', function (e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    if (touchEndX < touchStartX) {
        document.getElementsByClassName('menu')[0].style.display = 'block';
    }
}

document.getElementsByClassName('sandwich')[0].addEventListener('click', function () {
    document.getElementsByClassName('menu')[0].style.display = 'block';
});
document.getElementsByClassName('menu__close')[0].addEventListener('click', function () {
    document.getElementsByClassName('menu')[0].style.display = 'none';
});
document.getElementsByClassName('search__reveal')[0].addEventListener('click', function () {
    document.getElementsByClassName('search__input')[0].style.display = 'block';
    document.getElementsByClassName('search__input')[0].focus();
    document.getElementsByClassName('search__submit')[0].style.display = 'block';
    document.getElementsByClassName('search__reveal')[0].style.display = 'none';
});
document.getElementsByClassName('search__input')[0].addEventListener('focusout', function () {
    document.getElementsByClassName('search__input')[0].style.display = 'none';
    document.getElementsByClassName('search__submit')[0].style.display = 'none';
    document.getElementsByClassName('search__reveal')[0].style.display = 'block';
});
