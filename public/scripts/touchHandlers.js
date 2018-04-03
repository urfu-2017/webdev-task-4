'use strict';

window.onload = main;

class Search {
    constructor() {
        this.element = document.querySelector('.search');
        this.input = document.querySelector('.search__input');
        this.searchButton = document.querySelector('.search__button');
        this.startButton = document.querySelector('.search__start-button');
    }

    toggleVisibility() {
        this.input.style.display = this.input.style.display === '' ? 'block' : '';
        this.searchButton.style.display = this.searchButton.style.display === ''
            ? 'block'
            : '';
        this.startButton.style.display = this.startButton.style.display === 'none'
            ? 'block'
            : 'none';
    }
}

class NavigationPanel {
    constructor() {
        this.element = document.querySelector('.navigation');
        this.openButton = document.querySelector('.header__nav-toggle');
        this.closeButton = document.querySelector('.navigation__close-button');
        this.touchstartX = undefined;
    }

    handleTouchStart(event) {
        event.preventDefault();

        if (event.touches.length !== 1) {
            return;
        }

        this.touchstartX = event.touches[0].pageX;
    }

    handleTouchEnd(event) {
        const moveOffset = this.touchstartX - event.changedTouches[0].pageX;

        if (moveOffset > this.element.offsetWidth / 2) {
            this.element.style.display = 'flex';
        }
    }

    toggleVisibility() {
        this.element.style.display = this.element.style.display === '' ? 'flex' : '';
    }
}

async function main() {
    const search = new Search();
    const navigationPanel = new NavigationPanel();

    search.startButton.onclick = () => search.toggleVisibility();
    search.input.onblur = () => search.toggleVisibility();

    navigationPanel.openButton.onclick = () => navigationPanel.toggleVisibility();
    navigationPanel.closeButton.onclick = () => navigationPanel.toggleVisibility();
    navigationPanel.closeButton.addEventListener('touchend',
        () => navigationPanel.toggleVisibility());

    const container = document.querySelector('.container');
    container.addEventListener('touchstart',
        (event) => navigationPanel.handleTouchStart(event), false);
    container.addEventListener('touchend',
        (event) => navigationPanel.handleTouchEnd(event), false);
}
