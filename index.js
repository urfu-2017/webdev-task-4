'use strict';

class Menu {
    constructor() {
        this.input = document.getElementById('menu');
        this.body = document.body;
    }

    init() {
        this.__addListeners();
    }

    __addListeners() {
        this.body.addEventListener('touchstart', e => {
            this.touch = e.touches[0];
            this.startX = this.touch.clientX;
            this.startY = this.touch.clientY;
        });
        this.body.addEventListener('touchend', e => {
            this.touchEnd = e.changedTouches[0];
            this.endX = this.touchEnd.clientX;
            this.endY = this.touchEnd.clientY;
            if (this.startX - this.endX > 100 && Math.abs(this.endY - this.startY) < 40) {
                this.__show();
            }
            if (this.startX - this.endX < -100 && Math.abs(this.endY - this.startY) < 40) {
                this.__close();
            }
        });

        this.input.addEventListener('change', () => this.__toggleScroll());
    }

    __clearCoordinates() {
        this.startX = 0;
        this.startY = 0;
        this.endX = 0;
        this.endY = 0;
    }

    __show() {
        this.input.checked = true;
        this.__clearCoordinates();
        this.__toggleScroll();
    }

    __close() {
        this.input.checked = false;
        this.__clearCoordinates();
        this.__toggleScroll();
    }

    __toggleScroll() {
        if (window.innerWidth >= 768) {
            return;
        }
        if (this.input.checked) {
            window.onwheel = this.__preventDefault;
            window.ontouchmove = this.__preventDefault;
        } else {
            window.onwheel = null;
            window.ontouchmove = null;
        }
    }

    __preventDefault(e) {
        e.preventDefault();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const menu = new Menu();
    menu.init();
});
