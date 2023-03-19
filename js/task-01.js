/*
    Напиши скрипт, який:

Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.

В результаті, в консолі будуть виведені наступні повідомлення.

Number of categories: 3

Category: Animals
Elements: 4

Category: Products
Elements: 3

Category: Technologies
Elements: 5

*/
const createBlockOfList = function () {

    const content = 'Hello friend'
    const content2 = ['Tony', 'Marko', 'Jimmy', 'Rock', 'Luffy', 'Zorro']
    const fragment = document.createDocumentFragment();

    const elementWindow = document.querySelector('ul')

    // console.log(elementWindow)
    // -----------------------------------------
    const newLi = document.createElement('li')
    // -----------------------------------------

    const header = document.createElement('h2')
    const containerContent = document.createElement('ul')
    // ************************
    newLi.append(header, containerContent)
    // ------------------------
    newLi.className = 'item'
    header.textContent = "Hello my Friends!!!"

    let point = []
    for (let i = 0; i < content2.length; i++) { 
        point.push(document.createElement('li'))
    }
    // ------------------------
    point.forEach((element, index) => {
        containerContent.append(element)
        element.textContent = `${content2[index]}`
    })

    elementWindow.appendChild(newLi)
    // ************************
    // -----------------------------------------
    const liElement = elementWindow.querySelectorAll('.item')

    liElement.forEach(element => element.style.color = 'red')
    liElement.forEach(element => {

    const header = element.querySelector('h2')
    header.style.color = 'green'
    })
// #########################################
// #########################################
}
createBlockOfList();
// const listOfData = document.querySelector('ul')
// console.log(listOfData.innerHTML)
const elementWindow = document.querySelector('ul');
console.log(elementWindow);

elementWindow.childElementCount // кількість лішок в числовому значенні


const listItems = document.querySelectorAll('.item')
console.log(listItems, ' Quantity: ', listItems.length) // інший варріант знаходження кількості


listItems.forEach(el => {

    const header = el.querySelector('h2')
    const countElemEl = el.querySelector('ul')
    
    console.log("Category: ", header.textContent) // текст у дочірньому вузлі header
    console.log("Elements: ", countElemEl.children.length) // кількість вкладених дітей списку елемента .item

    
})


