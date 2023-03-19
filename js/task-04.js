const increaseBtn = document.querySelector('button[data-action="increment"]');
const decreaseBtn = document.querySelector('button[data-action="decrement"]');
const showValue = document.querySelector('#value');


const counter = {
    counterValue: 0,
    increase() { 
        
        this.counterValue += 1;
        showValue.textContent = `${this.counterValue}`
    },
    decrease() { 
        if (this.counterValue > 0) { 
            this.counterValue -= 1;
            showValue.textContent = `${this.counterValue}`
        }
        showValue.textContent = `${this.counterValue}`
        console.log(this.counterValue);
    },
    
}
console.log(counter.counterValue);

increaseBtn.addEventListener("click", counter.increase.bind(counter));
decreaseBtn.addEventListener("click", counter.decrease.bind(counter));