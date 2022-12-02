const minusBtn = document.querySelector('button[data-action = "decrement"]');
console.log(minusBtn);
const plustBtn = document.querySelector('button[data-action = "increment"]');
console.log(plustBtn);
const span = document.querySelector('#value');
console.log(span)
let counterValue = 0;
function decrement() {
    counterValue -= 1;
    span.textContent = counterValue;
}
minusBtn.addEventListener('click', decrement);
function increment() {
    counterValue += 1;
    span.textContent = counterValue;
}
plustBtn.addEventListener('click', increment);