const input = document.querySelector('#font-size-control');
const elementSpan = document.querySelector('#text');

input.addEventListener('input', onInputChange);


function onInputChange(event) {
    return elementSpan.style.fontSize = `${event.currentTarget.value}px`;
};

