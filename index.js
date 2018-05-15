/* eslint-disable no-unused-vars */

window.addEventListener('resize', () => {
    document.getElementById('main-nav').classList.remove('open-menu-mobile');
});

function showMenu() {
    document.getElementById('main-nav').classList.add('open-menu-mobile');
}

function showInput() {
    document.getElementById('search-field').classList.remove('hide-inputs-tablet');
    // document.getElementById('search-field').style.display = 'block';
}

function hideInput() {
    document.getElementById('search-field').classList.add('hide-inputs-tablet');
    // document.getElementById('search-field').style.display = 'none';
}

function closeMenu() {
    document.getElementById('main-nav').classList.remove('open-menu-mobile');
}
