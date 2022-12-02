function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const changeBtn = document.querySelector('.change-color');
const body = document.querySelector('body');
const text = document.querySelector('.color');

changeBtn.addEventListener('click', changeColor)
function changeColor(event) {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  text.textContent = color; 
}
