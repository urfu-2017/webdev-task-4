const searchIcon = document.getElementById('search-icon');
const menuIcon = document.getElementById('menu-icon');
const search = document.getElementById('search');
const searchInput = document.getElementById('search-input');
const categories = document.getElementById('categories');
const closeIcon = document.getElementById('close');
const body = document.querySelector('body');
let startX;
let finalX;

searchIcon.onclick = () => {
    searchIcon.style.display = 'none';
    search.style.display = 'block';
    document.querySelector('header').style['grid-template-columns'] = '40% 60%';
    searchInput.focus();
};

searchInput.onblur = () => {
    if (window.innerWidth <= 1024) {
        searchIcon.style.display = 'block';
        search.style.display = 'none';
        document.querySelector('header').style['grid-template-columns'] = '80% 20%';
    }
}

menuIcon.onclick = () => {
    categories.style.display = 'flex';
    document.body.style.overflow = 'hidden';
};

closeIcon.onclick = () => {
    categories.style.display = 'none';
    document.body.style.overflow = 'auto';
};

body.addEventListener('touchstart', (event) => {
    startX = event.changedTouches[0].screenX;
});

body.addEventListener('touchend', (event) => {
    finalX = event.changedTouches[0].screenX;
    if (finalX < startX) {
        categories.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
});
