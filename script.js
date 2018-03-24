document.addEventListener('DOMContentLoaded', () => {
    $('.search-min > .search-min__input > input').onblur = function () {
        $('.search-min > .search-min__input').style.display = 'none';
        $('.search-min > .search-button').style.display = 'block';
    };

    $('.search-min > .search-button').onclick = function () {
        $('.search-min > .search-min__input').style.display = 'block';
        $('.search-min > .search-button').style.display = 'none';
        $('.search-min > .search-min__input > input').focus();
    };

    $('.menu-close-button').onclick = () => {
        $('.nav').style.display = 'none';
        window.removeEventListener('scroll', noScroll);
    };

    $('.menu-button').onclick = showMenu;
});

function showMenu() {
    $('.nav').style.display = 'block';
    window.addEventListener('scroll', noScroll);
}

function noScroll() {
    window.scrollTo(0, 0);
}

function $(selector) {
    return document.querySelector(selector);
}
