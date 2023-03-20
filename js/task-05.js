const actionScript = {

    content: "Anonymous",

    input: document.querySelector('#name-input'), // приєднатись до вузла поля вводу #name-input
    output: document.querySelector('#name-output'), // приєднатись до вузла виводу спан #name-output

    outputFunction() { 
        this.output.textContent = this.input.value.trim() || this.content; // якщо поле пусте відображається текст "Anonymous" інакше контент із поля вводу
    },
};

actionScript.input.addEventListener('input', actionScript.outputFunction.bind(actionScript)) // при вводі тексту він синхронно відображається у спані
