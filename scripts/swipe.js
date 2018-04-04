/* exported onSwipeLeft */

function onSwipeLeft(element, handler) {
    let thresholdX = 100;
    let threshholdY = 200;
    let startX;
    let startY;

    element.ontouchstart = e => {
        startX = e.changedTouches[0].clientX;
        startY = e.changedTouches[0].clientY;
    };

    element.ontouchend = e => {
        let distanceX = startX - e.changedTouches[0].clientX;
        let distanceY = Math.abs(e.changedTouches[0].clientY - startY);

        if (distanceX >= thresholdX && distanceY <= threshholdY) {
            handler();
        }
    };
}
