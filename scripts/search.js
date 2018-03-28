/* eslint-disable no-unused-vars */
function showSearch() {
    document.getElementById('search').style.display = 'flex';
    document.getElementById('search-icon').style.display = 'none';
    document.getElementById('search-text').focus();
}

function hideSearch() {
    if (document.documentElement.clientWidth > 450 && document.documentElement.clientWidth < 1281) {
        document.getElementById('search').style.display = 'none';
        document.getElementById('search-icon').style.display = 'block';
    }
}
