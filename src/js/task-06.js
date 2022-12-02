const input = document.querySelector('#validation-input');
const inputLength = input.getAttribute('data-length');
const inputNumLength = Number(inputLength);
console.log(inputNumLength)
console.log(input);
input.addEventListener('change', onFocus)
function onFocus(event) {
    if (event.currentTarget.value.length === inputNumLength) {
        input.classList.remove('invalid')
        input.classList.add('valid');
    }
    else {
        input.classList.remove('valid');
        input.classList.add('invalid');
    }
}