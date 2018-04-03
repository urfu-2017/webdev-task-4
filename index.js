var touchstartX = 0;
var touchendX = 0;

var root = document.querySelector('html');
var searchInput = document.querySelector('.searchInput');
var searchIcon = document.querySelector('.searchTabletIcon');
var navigation = document.querySelector('.navigation');
var navIcon = document.querySelector('.navigationIcon');

function isVisible(element) {
    return element.offsetParent !== null;
}

function getParameterByName(name, url) {
    if (!url) {
        url = window.location.href;
    }

    name = name.replace(/[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
    var results = regex.exec(url);

    if (!results) {
        return null;
    }
    if (!results[2]) {
        return '';
    }

    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function outsideNavClickListener(event) {
    if (navigation.style.display !== 'none' && !navigation.contains(event.target)) {
        navigation.style.display = 'none';
        root.style.overflow = 'auto';

        document.removeEventListener('click', outsideNavClickListener);
    }
}

function openNavigationMenu(event) {
    navigation.style.display = 'block';
    root.style.overflow = 'hidden';

    event.stopPropagation();
    document.addEventListener('click', outsideNavClickListener);
}

navIcon.onclick = openNavigationMenu;

searchIcon.onclick = function () {
    searchInput.style.display = 'block';
    searchInput.focus();
};

searchInput.onblur = function () {
    if (isVisible(searchIcon)) {
        searchInput.style.display = 'none';
    }
};

root.addEventListener('touchstart', function (event) {
    touchstartX = event.changedTouches[0].screenX;
}, false);

root.addEventListener('touchend', function (event) {
    touchendX = event.changedTouches[0].screenX;
    if (touchendX <= touchstartX && touchstartX - touchendX > 150) {
        openNavigationMenu(event);
    }
}, false);

window.onresize = function () {
    location.href = '?query=' + searchInput.value;
};

searchInput.value = getParameterByName('query', location.href);
