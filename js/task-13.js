const tech = [
    { label: 'HTML', },
    { label: 'CSS', },
    { label: 'JavaScript', },
    { label: 'Node.js', },
    { label: 'React', },
    { label: 'Vue', },
    { label: 'Next.js', },
    { label: 'Mobx', },
    { label: 'Redux', },
    { label: 'React Router', },
    { label: 'GraphQl', },
    { label: 'PostgreSQL', },
    { label: 'MySQL', },
    { label: 'MongoDB', },
];

/*
1 Рендеримо розмітку елементів списку
2 Слухаємо зміни фільтру
3 Фільтруємо данні та рендеримо нові елементи
*/

const refs = {
    list: document.querySelector('.js-list'),
    input: document.querySelector('#filter'),
};

refs.input.addEventListener('input', _.debounce(onFilterChange, 300));

const listItemsMarkup = createListItemsMarkup(tech);
// refs.list.insertAdjacentHTML('beforeend', listItemsMarkup); // використовуємо коли хочемо додати якусь інформацію
populateList(listItemsMarkup);


function createListItemsMarkup(items) { 
    return items.map(item => `<li>${item.label}</li>`).join('');
}

function onFilterChange(evt) {
    // значення інпуту в нижньому регістрі
    const filter = evt.target.value.toLowerCase();
    // викликаємо метод фільтрації даних tech по значенню інпута
    const filteredItems = tech.filter(t => t.label.toLowerCase().includes(filter));

    console.log(filteredItems);
    // створюємо розмітку для відфільтрованих даних
    const listItemsmarkup = createListItemsMarkup(filteredItems);
    // рендеримо створену розмітку
    populateList(listItemsmarkup);
 }
function populateList(markup) { 
    refs.list.innerHTML = markup; 
}