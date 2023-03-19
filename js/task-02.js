/* 
  Напиши скрипт, який для кожного елемента масиву ingredients:

  Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
  Додасть назву інгредієнта як його текстовий вміст.
  Додасть елементу клас item.
  Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
*/

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

// ************************************************************
// ************************************************************
// Перший варріант рішення задачі за допомогою .map() .reduce()
// ************************************************************

// const customizationIngredient = ingredients.map(element => `<li>${element}</li>`).join('');
// const customizationIngredient = ingredients.reduce((total, curEl) => total += `<li>${curEl}</li>`, "")

// ----------------------------------------------------------------
// fragment.innerHTML += customizationIngredient

// більш новіший метод додавання елементів це insertAdjacentHTML
// fragment.insertAdjacentHTML('beforeend', customizationIngredient)
// ----------------------------------------------------------------

const customizationIngredient = ingredients.map(elem => { 

  const listEl = document.createElement('li');

  listEl.className = 'item';
  listEl.textContent = elem;

  fragment.append(listEl);
});

// -------------------------
blockList1.appendChild(fragment);

// fragment.append(blockList1);
// dataHTML.append(fragment);
