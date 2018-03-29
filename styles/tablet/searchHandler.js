window.addEventListener('load', () => {
    const searchInput = document.querySelector('.search__input');
    const searchButtonTablet = document.querySelector('.search_button_tablet');
    if (searchButtonTablet.style.display === 'none') {
        return;
    }
    searchButtonTablet.addEventListener('click', () => {
        searchInput.style.visibility = 'visible';
        searchButtonTablet.style.visibility = 'hidden';
        searchInput.focus();
        searchInput.addEventListener('blur', () => {
            searchInput.style.visibility = 'hidden';
            searchInput.value = '';
            searchButtonTablet.style.visibility = 'visible';
        });
    });
});
