const searchIcon = document.querySelector('.search-icon');
const searchBar = document.querySelector('.search');
const searchInput = document.querySelector('.search__input');

searchIcon.onclick = () => {
    searchIcon.style.visibility = 'hidden';
    searchBar.style.visibility = 'visible';
    searchInput.focus();

    searchInput.onblur = () => {
        searchIcon.style.visibility = 'visible';
        searchBar.style.visibility = 'hidden';
    };
};
