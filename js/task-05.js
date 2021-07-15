const input = document.querySelector('#name-input');
const outpootName = document.querySelector('#name-output');


input.addEventListener('input', onInputChange);


function onInputChange(event) {
    if (event.currentTarget.value !== "") {
       return outpootName.textContent = event.currentTarget.value;
    }
    return outpootName.textContent = 'незнакомец';
};


