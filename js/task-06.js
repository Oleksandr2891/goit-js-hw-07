const input = document.querySelector('#validation-input');
const minLength = input.getAttribute('data-length');

input.addEventListener('blur', onInputChange);

function onInputChange(event) {
    if (event.currentTarget.value.length >= minLength) {
            console.log(event.currentTarget.value.length);

       return input.classList.toggle('valid');
    }
    return input.classList.toggle('invalid');
};