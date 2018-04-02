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
        Hammer(this.body).on('swipeleft', () => this.__show());
        Hammer(this.body).on('swiperight', () => this.__close());
        this.input.addEventListener('change', () => this.__toggleScroll());
    }

    __show() {
        this.input.checked = true;
        this.__toggleScroll();
    }

    __close() {
        this.input.checked = false;
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
};

document.addEventListener('DOMContentLoaded', () => {
    const menu = new Menu();
    menu.init();
});