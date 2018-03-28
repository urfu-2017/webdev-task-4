const getById = id => document.getElementById(id);

window.onload = () => {
    const checkbox = getById('search__show-button');
    const input = getById('search__input');

    if (window.innerWidth <= 850) {
        input.setAttribute('disabled', true);
    }

    checkbox.onchange = () => {
        if (checkbox.checked) {
            input.setAttribute('disabled', true);
        } else {
            input.removeAttribute('disabled');
        }
        input.focus();
    };

    input.onblur = () => checkbox.click();
};
