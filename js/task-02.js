const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulList = document.querySelector('#ingredients');
const elements = ingredients.map(ingredient => {
  const newLi = document.createElement('li');
  newLi.classList.add('item');
  newLi.textContent = `${ingredient}`;
  return newLi
});
console.log(elements)

ulList.append(...elements)
console.log(ulList)