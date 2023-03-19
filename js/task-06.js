const controlInputLength = {

    input: document.querySelector('#validation-input'),
    
    length: Number(document.querySelector('#validation-input').dataset.length),

    control() { 

        this.length === this.input.value.length ? this.input.className = 'valid' : this.input.className = 'invalid' 
    },
}
controlInputLength.input.addEventListener('blur', controlInputLength.control.bind(controlInputLength))