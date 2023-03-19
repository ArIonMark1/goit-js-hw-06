/*
    Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), 
    перевіряє його вміст щодо правильної кількості введених символів.

<input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Please enter 6 symbols"
/>

Яка кількість символів повинна бути в інпуті, зазначається 
в його атрибуті data-length.
Якщо введена правильна кількість символів, то border інпуту стає зеленим, 
якщо неправильна кількість - червоним.
Для додавання стилів використовуй CSS-класи valid і invalid, 
які ми вже додали у вихідні файли завдання.

#validation-input {
  border: 3px solid #bdbdbd;
}

#validation-input.valid {
  border-color: #4caf50;
}

#validation-input.invalid {
  border-color: #f44336;
}
*/


// const body = document.querySelector('body');
// console.log(body.childNodes);

// const inputKnot = document.querySelector('#validation-input');
// console.dir(inputKnot);


const controlInputLength = {

    input: document.querySelector('#validation-input'),
    
    length: Number(document.querySelector('#validation-input').dataset.length),

    control() { 

        this.length === this.input.value.length ? this.input.className = 'valid' : this.input.className = 'invalid' 
    },
}
controlInputLength.input.addEventListener('blur', controlInputLength.control.bind(controlInputLength))