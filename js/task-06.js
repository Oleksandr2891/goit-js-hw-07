const input = document.querySelector('#validation-input');
const minLength = +input.getAttribute('data-length');

input.addEventListener('blur', onInputChange);

function onInputChange(event) {
    if (event.currentTarget.value.length === minLength) {

       return input.classList.add('valid');
    }

    return input.classList.toggle('invalid');
    
};

