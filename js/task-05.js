const input = document.querySelector('#name-input');
console.log(input);
const output = document.querySelector('#name-output');
console.log(output.textContent);


input.addEventListener('input', rename);

function rename(event) {
    if (event.currentTarget.value === "") {
        output.textContent="Anonymous"
    }
    else {
        output.textContent=event.currentTarget.value
    }
}