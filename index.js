const searchButton = document.querySelector('.heading__search-btn');
searchButton.addEventListener('click', function () {
    document.querySelector('.heading__search-line').focus();
});
const navigationCloseButton = document.querySelector('.navigaton__close-button');

const sandwichButton = document.querySelector('.sandwich__button');
sandwichButton.addEventListener('click', function () {
    document.querySelector('.navigation-wrapper').style.display = 'block';
    navigationCloseButton.style.display = 'block';
});


navigationCloseButton.addEventListener('click', function () {
    document.querySelector('.navigation-wrapper').style.display = 'none';
    navigationCloseButton.style.display = 'none';
});
