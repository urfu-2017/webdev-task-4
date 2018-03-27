'use strict';

let input = document.getElementsByClassName('search-form-tablet__input')[0];

document.getElementsByClassName('search-form-tablet__button')[0].addEventListener('click', function (e) {
    input.style.visibility = 'visible';
    input.focus();
});

input.addEventListener('focusout', function (e) {
    input.style.visibility = 'hidden';
});
