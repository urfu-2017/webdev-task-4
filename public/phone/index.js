'use strict';

class Nav {
    constructor() {
        this.element = document.querySelector('.nav');

        document.querySelector('.header__menu').onclick = () => this.open();
        this.element.firstElementChild.onclick = () => this.close();
    }

    open() {
        this.element.style.display = 'block';
        this.element.style.height = `${document.querySelector('body').clientHeight}px`;
    }

    close() {
        this.element.style.display = 'none';
    }
}

window.onload = () => {
    const nav = new Nav();

    let startX = 0;
    let startY = 0;

    document.addEventListener('touchstart', ev => {
        startX = ev.touches[0].clientX;
        startY = ev.touches[0].clientY;
    });

    document.addEventListener('touchend', ev => {
        const x = ev.changedTouches[0].clientX;
        const y = ev.changedTouches[0].clientY;
        const deltaX = Math.abs(startX - x);
        const deltaY = Math.abs(startY - y);

        if (deltaX < 30 || deltaY > 30) {
            return;
        }

        if (x < startX) {
            nav.open();
        }

        if (x > startX) {
            nav.close();
        }
    });
};
