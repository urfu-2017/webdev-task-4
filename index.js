function showMenu() {
    const menu = document.getElementsByClassName('first-row__menu')[0];
    const body = document.body;
    body.style.overflow = 'hidden';
    menu.classList.add('visibility_visible');
}

function closeMenu() {
    const menu = document.querySelector('.first-row__menu');
    const body = document.body;
    body.style.overflow = 'scroll';
    menu.classList.remove('visibility_visible');
}

window.onload = async () => {

    const menuBtn = document.getElementsByClassName('title__btn')[0];
    menuBtn.addEventListener('click', showMenu, false);

    const menuClose = document.getElementsByClassName('first-row__close')[0];
    menuClose.addEventListener('click', closeMenu, false);

    const body = document.body;
    let axis = 0;

    body.addEventListener('touchstart', (e) => {
        axis = e.changedTouches[0].clientX;
    });

    body.addEventListener('touchend', (e) => {
        if (window.innerWidth <= 600) {
            if (e.changedTouches[0].clientX + 60 < axis) {
                showMenu();
            }

            if (e.changedTouches[0].clientX > axis + 60) {
                closeMenu();
            }
        }
    });
};

