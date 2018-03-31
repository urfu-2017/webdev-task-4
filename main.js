const searchForm = document.querySelector('.search-form');
const searchFormInput = searchForm.querySelector('.search-form__input');
const searchTrigger = document.querySelector('.search-trigger');

searchTrigger.addEventListener('click', () => {
    searchForm.classList.add('search-form--focused');
    searchFormInput.focus();
});

searchFormInput.addEventListener('blur', () => {
    searchForm.classList.remove('search-form--focused');
});

const page = document.querySelector('.page');
const categories = document.querySelector('.categories');
const categoriesClose = categories.querySelector('.categories__close');
const menuTrigger = document.querySelector('.menu-trigger');

menuTrigger.addEventListener('click', () => {
    categories.classList.add('categories--open');
    page.classList.add('page--fixed');
});

categoriesClose.addEventListener('click', () => {
    categories.classList.remove('categories--open');
    page.classList.remove('page--fixed');
});
