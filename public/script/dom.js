document.addEventListener('DOMContentLoaded', () => {
    let contentMenu = document.querySelector('.content-menu');
    let buttonClose = document.querySelector('.content_close');
    let height = document.body.scrollHeight;
    let search = document.querySelector('.search-form__content');
    let pic = document.querySelector('.search-form__icon');

    Array.prototype.forEach.call(document.getElementsByClassName('item-feature__mark'), el => {
        let markNumber = Number(el.childNodes[0].data);
        if (markNumber < 4.5) {
            el.classList.add('item-feature__mark_bad');
        }
    });

    pic.addEventListener('click', () => {
        search.classList.add('search-form__content_focus');
        pic.classList.add('search-form__icon_clicked');
        document.querySelector('.search-form__input').focus();
    });

    document.querySelector('.search-form__input').addEventListener('focusout', () => {
        search.classList.remove('search-form__content_focus');
        search.classList.add('search-form__content');
        pic.classList.remove('search-form__icon_clicked');
        pic.classList.add('search-form__icon');
    });


    const openMenu = () => {
        buttonClose.classList.remove('content_close_none');
        contentMenu.classList.remove('content-menu_none');
        contentMenu.style.height = `${height}px`;
        contentMenu.classList.add('content-menu_block');
        buttonClose.classList.add('content_close_block');
        buttonClose.addEventListener('click', () => {
            buttonClose.classList.add('content_close_none');
            contentMenu.classList.add('content-menu_none');
        });
    };

    document.querySelector('.menu__icon').addEventListener('click', () => {
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

