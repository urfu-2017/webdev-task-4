const page = document.querySelector('.page');
const ticker = document.getElementById('nav-ticker');
/* eslint-disable no-undef */
const hammer = new Hammer(page);
hammer.on('swipeleft', () => {
    if (!ticker.checked) {
        ticker.click();
        page.style.overflow = 'hidden';
    }
});

ticker.onclick = () => {
    if (!ticker.checked) {
        page.style.overflow = 'scroll';
    }
};
