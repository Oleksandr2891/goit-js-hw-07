

const elementBtnRend = document.querySelector('[data-action="render"]');
const elementBtnDestr = document.querySelector('[data-action="destroy"]');


const inputValue = document.querySelector('#controls input');
const parentOfBoxes = document.querySelector('#boxes');

inputValue.addEventListener('input', onInputChange);

function onInputChange(event) {
    return inputValue.value
};


elementBtnRend.addEventListener('click', function () {
    createBoxes(parentOfBoxes, onInputChange())
});


const createBoxes = (container, amount) => {
    let size = 30;
    const margin = 5;

    for (let i = 0; i < amount; i++) {
        const itemElement = document.createElement('div');
        itemElement.style.width = `${size}px`;
        itemElement.style.height = `${size}px`;
        itemElement.style.margin = `${margin}px`;
        itemElement.style.backgroundColor = `${'#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6)}`;
        size = size + 10;
        container.append(itemElement);
    }
}

elementBtnDestr.addEventListener('click', function () {
    destroyBoxes();
});

const destroyBoxes = () => {
    parentOfBoxes.innerHTML = '';
    inputValue.value = '';
};