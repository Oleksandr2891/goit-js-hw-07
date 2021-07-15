const counter = {
    counterValue: 0,
    increment() {
        this.counterValue += 1;
    },
    decrement() {
        this.counterValue -= 1;
    },
}



const elementInc = document.querySelector('[data-action="increment"]');
const elementDec = document.querySelector('[data-action="decrement"]');


const valueEl = document.querySelector('#value');


elementDec.addEventListener('click', function () {
    counter.decrement();
    valueEl.textContent = counter.counterValue;
});


elementInc.addEventListener('click', function () {
    counter.increment();
    valueEl.textContent = counter.counterValue;
});