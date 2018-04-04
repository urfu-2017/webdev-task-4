const page = document.querySelector('.page');
const ticker = document.getElementById('nav-ticker');
const changePageOverflowStyle = () => {
    page.classList.toggle('page_overflow_hidden');
};

let startX;
page.addEventListener('touchstart', e => {
    const [touch] = e.changedTouches;
    startX = touch.pageX;
});

page.addEventListener('touchend', e => {
    const [touch] = e.changedTouches;
    const distanceX = touch.pageX - startX;
    if (Math.abs(distanceX) > page.clientWidth / 3) {
        ticker.click();
    }
});

ticker.onclick = changePageOverflowStyle;
