const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// 1 створити фрагмент сторінки  з яким будемо працювати а в кінці його додамо до головної сторінки
// const body = document.querySelector('body')
// const listBlock = document.querySelector('.gallery');

// const  fragmentOfPage = document.createDocumentFragment()

// // 2 створити <img> та вкласти в <li>
// images.forEach(({ url, alt }) => { 
//   // console.log(url,' --- ',  alt)
//   const liItem = document.createElement('li');
//   const imgItem = document.createElement('img');

//   // 3 використовувати шаблонні рядки `${el}` та метод insertAdjacentHTML()

//   imgItem.src = `${url}`;
//   imgItem.alt = `${alt}`;


//   liItem.style.height = '400px';

//   imgItem.style.height = '100%';
//   imgItem.style.border = '3px solid #ccc';
//   imgItem.style.borderRadius = '10px';
//   imgItem.style.boxShadow = '0 0 10px #444'
  
//   liItem.append(imgItem);
//   fragmentOfPage.append(liItem);

// })

// // 4 Додати стилі через класи стилів
// listBlock.style.display = 'block'
// listBlock.style.justifuContent = 'center';
// listBlock.style.alignItem = 'center';
// listBlock.style.gap = '15px';
// listBlock.style.listStyleType = 'none';

  
// listBlock.append(fragmentOfPage);
// body.append(listBlock);

// ##########################################################################

const bodyElement = document.querySelector('body');
const listElement = document.querySelector('.gallery');

const documentFragment = document.createDocumentFragment();

// images.forEach(elem => console.log(elem))

// використовуємо шаблонні рядки `${el}` та метод insertAdjacentHTML()
const listItems = images.map(({url, alt}) => `<li><img class="item__img" src="${url}" alt="${alt}"></li>`).join('');
console.log(listItems);

listElement.insertAdjacentHTML('afterbegin', listItems)
// ####################################################
// 4 Додати стилі через класи стилів
listElement.style.display = 'flex';
listElement.style.gap = '15px'
listElement.style.justifyContent = 'center'
listElement.style.listStyle = 'none'
listElement.style.padding = '0'

for (const element of listElement.children) { 

  element.style.height = '400px';
}

const pictures = document.getElementsByClassName('item__img');

for (const element of pictures) { 

  element.style.height = '100%';
  element.style.border = '3px solid #ccc';
  element.style.borderRadius = '10px';
  element.style.boxShadow = '0 0 10px #444'
}

// #################################
documentFragment.append(listElement)
bodyElement.append(documentFragment)
