document.addEventListener('DOMContentLoaded', () => {
    let contentMenu = document.getElementsByClassName('content-menu')[0];
    let closeBtn = document.getElementsByClassName('content_close')[0];
    let menu = document.getElementsByClassName('menu__icon')[0];
    let height = document.body.scrollHeight;
    let search = document.getElementsByClassName('search-form__content')[0];
    let pic = document.getElementsByClassName('search-form__icon')[0];
    Array.prototype.forEach.call(document.getElementsByClassName('item-feature__mark'), el => {
        let markNumber = Number(el.childNodes[0].data);
        let color = markNumber > 4.5 ? 'green' : '#67e34e';
        el.style.background = color;
        el.style['border-left-color'] = color;
    });
    pic.addEventListener('click', () => {
        search.style.display = 'flex';
        pic.style.display = 'none';
        document.getElementsByClassName('search-form__input')[0].focus();
        document.getElementsByClassName('search-form__input')[0].onblur = () => {
            pic.style.display = 'block';
            search.style.display = 'none';
        };

    });

    const openMenu = () => {
        contentMenu.style.height = `${height}px`;
        contentMenu.style.display = 'flex';
        closeBtn.style.display = 'block';
        closeBtn.addEventListener('click', () => {
            contentMenu.style.display = 'none';
            closeBtn.style.display = 'none';
        });
    };

    menu.addEventListener('click', () => {
        openMenu();
    });

    let handleStart = 0;
    let handleEnd = 0;
    const html = document.querySelector('html');
    html.addEventListener('touchstart', event => {
        handleStart = event.changedTouches[0].screenX;
    }, false);

    html.addEventListener('touchend', (event) => {
        handleEnd = event.changedTouches[0].screenX;
        if (handleEnd <= handleStart && handleStart - handleEnd > 200) {
            openMenu();
        }
    }, false);
});

