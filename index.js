'use strict';


const searchIcon = document.getElementsByClassName('header__search-icon')[0];
const mediumSearchField =
    document.getElementsByClassName('header__search page_mode_medium')[0]
        .getElementsByClassName('header__search-field')[0];

const promotes = document.getElementsByClassName('promotes')[0];
const hamburger = document.getElementsByClassName('header__hamburger')[0];
const promotesCross = document.getElementsByClassName('promotes__close')[0];

searchIcon.addEventListener('click', function () {
    mediumSearchField.style.display = 'block';
    mediumSearchField.focus();
});

mediumSearchField.addEventListener('focusout', function () {
    mediumSearchField.style.display = 'none';
});

function openPromotes() {
    promotes.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closePromotes() {
    promotes.style.display = 'none';
    document.body.style.overflow = 'auto';
}

hamburger.addEventListener('click', openPromotes);
promotesCross.addEventListener('click', closePromotes);

const swipeHandler = {
    start: { x: undefined, y: undefined },
    delta: undefined,
    xThreshold: 300,
    yThreshold: 400,
    timeThreshold: 300,
    elapsedTime: undefined,
    startTime: undefined,
    handlers: []
};

swipeHandler.addHandler = function (func) {
    this.handlers.push(func);
};

swipeHandler._handle = function () {
    if (window.matchMedia('(max-width: 650px)').matches) {
        this.handlers.forEach(h => h(this.delta));
    }
};

swipeHandler.touchStart = function (event) {
    const touchobj = event.changedTouches[0];
    this.delta = 0;
    this.start.x = touchobj.pageX;
    this.start.y = touchobj.pageY;
    this.startTime = new Date().getTime();
    event.preventDefault();
};

swipeHandler.touchMove = function (event) {
    event.preventDefault();
};

swipeHandler.touchEnd = function (event) {
    const touchobj = event.changedTouches[0];
    this.delta = touchobj.pageX - this.start.x;
    const yDeltaAbs = Math.abs(touchobj.pageY - this.start.y);
    this.elapsedTime = new Date().getTime() - this.startTime;
    const swiped = (this.elapsedTime <= this.timeThreshold &&
        Math.abs(this.delta) >= this.xThreshold &&
        yDeltaAbs <= this.yThreshold);
    if (!swiped) {
        return;
    }
    this._handle();
    event.preventDefault();
};

swipeHandler.addHandler(function (delta) {
    if (delta < 0) {
        return;
    }
    closePromotes();
});

swipeHandler.addHandler(function (delta) {
    if (delta > 0) {
        return;
    }
    openPromotes();
});

document.body.addEventListener('touchstart', swipeHandler.touchStart, false);
document.body.addEventListener('touchmove', swipeHandler.touchMove, false);
document.body.addEventListener('touchend', swipeHandler.touchEnd, false);
