/*
    Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), 
    підставляє його поточне значення в span#name-output. Якщо інпут порожній, 
    у спані повинен відображатися рядок "Anonymous".

            <input type="text" id="name-input" placeholder="Please enter your name" />
            <h1>Hello, <span id="name-output">Anonymous</span>!</h1>
*/

// вивести усі дочірні вузли документу //
// for (let i = 0; i < document.body.childNodes.length; i++) { 
//     console.log(document.body.childNodes[i]);
// }
    
// приєднатись до вузла поля вводу #name-input
// приєднатись до вузла виводу спан #name-output
// при вводі тексту він синхронно відображається у спані
// якщо поле пусте відображається текст "Anonymous" інакше контент із поля вводу


const actionScript = {

    content: "Anonymous",

    input: document.querySelector('#name-input'), // приєднатись до вузла поля вводу #name-input
    output: document.querySelector('#name-output'), // приєднатись до вузла виводу спан #name-output

    outputFunction() { 
        this.output.textContent = this.input.value || this.content; // якщо поле пусте відображається текст "Anonymous" інакше контент із поля вводу
    },
};

inputField.addEventListener('input', actionScript.outputFunction.bind(actionScript)) // при вводі тексту він синхронно відображається у спані