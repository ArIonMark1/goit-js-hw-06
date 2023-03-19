const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const dataHTML = document.querySelector('body')
const blockList1 = document.querySelector('#ingredients')
console.log(blockList1)
const fragment = document.createDocumentFragment(); // створюємо фрагмент нашої сторінки і 
// будемо працювати з ним а в кінці будемо вставляти за раз весь результат нашої роботи, 
// це робимо щоб не нагружати сторінку багатьма обробками

const customizationIngredient = ingredients.map(elem => { 

  const listEl = document.createElement('li');

  listEl.className = 'item';
  listEl.textContent = elem;

  fragment.append(listEl);
});

// -------------------------
blockList1.appendChild(fragment);

