document.addEventListener('DOMContentLoaded', ready);

function ready() {
    let button = document.querySelector('.market-info__serach-button-img');
    button.onclick = () => {
        document.querySelector('.market-info__search-field').focus();
    };

    document.querySelector('.market__topics-close').onclick = () => {
        document.querySelector('.market__navigation').style.display = 'none';
        document.body.style.overflow = 'scroll';
    };

    document.querySelector('.market-info__menu').onclick = () => {
        document.querySelector('.market__navigation').style.display = 'block';
        document.body.style.overflow = 'hidden';
    };
}
