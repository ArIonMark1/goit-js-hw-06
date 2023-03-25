const objElements = {
  parent: document.querySelector('.parent'),
  child: document.querySelector('.child'),
  innerChild: document.querySelector('.innerChild'),
}

objElements.parent.addEventListener('click', onParentClick);
objElements.child.addEventListener('click', onChildClick);
objElements.innerChild.addEventListener('click', onInnerChildClick);

function onParentClick(event) {
  console.log('Click on Parent !')
  console.log('Елемент на якому клікнули: ', event.target)
  console.log("Елемент на якому викликаний слухач: ", event.currentTarget)
}
function onChildClick(event) { 
  console.log('Click on Child !!')
  console.log('Елемент на якому клікнули: ', event.target)
  console.log("Елемент на якому викликаний слухач: ", event.currentTarget)
}
function onInnerChildClick(event) { 
  console.log('Click on InnerChild !!!')
  console.log('Елемент на якому клікнули: ', event.target)
  console.log("Елемент на якому викликаний слухач: ", event.currentTarget)
}

const colors = [
  { hex: '#3f51b5', rgb: '63,81,181'},
  { hex: '#673ab7', rgb: '103,58,183'},
  { hex: '#9c27b0', rgb: '156,39,176'},
  { hex: '#e91e63', rgb: '233,30,99'},
  { hex: '#f44336', rgb: '244,67,54'},
  { hex: '#009688', rgb: '0,150,136' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
  { hex: '#ff9800', rgb: '255,152,9' },
  { hex: '#795548', rgb: '121,85,72' },
  { hex: '#607d8b', rgb: '96,125,139' },
];
const paletteContainer = document.querySelector('.js-palette');
const cardsMarcup = createColorCardsMarkup(colors); 
paletteContainer.insertAdjacentHTML("beforeend", cardsMarcup) // кладемо одну велику строку і воно само з цим розберається(зручно)
// ##########################################################

paletteContainer.addEventListener('click', onPaletteContainerClick)

function createColorCardsMarkup(colors) { 
  return colors.map(({ hex, rgb }) => {
    return `
    <div class="color-card">
      <div>
        <div
        class="color-swatch"
        data-hex="${hex}"
        data-rgb="${rgb}"
        style="background-color: ${hex}"
      ></div>
      <div class="color-meta">
        <p>HEX: ${hex}</p>
        <p>RGB: ${rgb}</p>
      </div>
      </div>
      </div>
    `
  }).join('');
}

function onPaletteContainerClick(evt) { 
  const isColorSwatchEl = evt.target.classList.contains('color-swatch')

  if (!isColorSwatchEl) { 
    return;
  }

  removeActiveCardClass();

  const swatchEl = evt.target;
  // const parentColorCard = swatchEl.parentNode; // вибирає батьківський елемент, але, тільки на один рівень вище(це мінус..) і неважливо чи співпадає ім'я чи ні
// потрібно знайти предка нашого елементу
  const ancestorColorCard = swatchEl.closest('.color-card'); // не зважаючи на рівень поглиблення шукає предка тільки з таким іменем класу !!!
  addActiveCardClass(ancestorColorCard);
  // parentColorCard.classList.toggle('is-active'); // це якщо багато елементів, тобто працюємо із селекторами, як що потрібно вибрати багато елементів одночасно
  // ancestorColorCard.classList.toggle('is-active');
  // Нам потрібно вибрати один активний і при виборі ішого його активувати а попередній деактивувати
  // ancestorColorCard.classList.add('is-active');

  console.log(evt.target.dataset.hex);
  //--------------------------------------------------
  setBodyBgColor(swatchEl.dataset.hex);
}

function setBodyBgColor(color) { 
    document.body.style.backgroundColor = color;
}
function removeActiveCardClass() { 
  const currentActiveCard = document.querySelector('.color-card.is-active');
  if (currentActiveCard) { 
    currentActiveCard.classList.remove('is-active');
  }
}
function addActiveCardClass(target) { 
  target.classList.add('is-active');
}
