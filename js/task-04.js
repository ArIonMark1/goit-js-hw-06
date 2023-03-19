/*
    Лічильник складається зі спану і кнопок, 
    які по кліку повинні збільшувати і зменшувати його значення на одиницю.

        <div id="counter">
        <button type="button" data-action="decrement">-1</button>
        <span id="value">0</span>
        <button type="button" data-action="increment">+1</button>
        </div>

    Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника 
    та ініціалізуй її значенням 0.
    Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
    Оновлюй інтерфейс новим значенням змінної counterValue.
*/
// створити модель щотчика
// Створити змінну counterValue - поточне значення лічильника
// створити перемінні кнопок
// Додати слухачів натискання на кнопки
//
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