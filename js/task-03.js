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
const fragmentOfPage = document.createDocumentFragment('ul');

console.log(fragmentOfPage)
// 2 створити <img> та вкласти в <li>
const listBlocks = images.forEach(({ url, alt }) => { 
  // console.log(url,' --- ',  alt)
  const liItem = document.createElement('li');
  const imgItem = document.createElement('img');

  // 3 використовувати шаблонні рядки `${el}` та метод insertAdjacentHTML()

  imgItem.src = `${url}`;
  imgItem.alt = `${alt}`;


  liItem.style.height = '400px';

  imgItem.style.height = '100%';
  imgItem.style.border = '3px solid #ccc';
  imgItem.style.borderRadius = '10px';
  imgItem.style.boxShadow = '0 0 10px #444'
  
  liItem.appendChild(imgItem);
  fragmentOfPage.appendChild(liItem);

})

// 4 Додати стилі через класи стилів
listBlock.style.display = 'flex';
listBlock.style.justifuContent = 'center';
listBlock.style.alignItem = 'center';
listBlock.style.gap = '15px';
listBlock.style.listStyleType = 'none';

  
listBlock.appendChild(fragmentOfPage);






