const coordsOutputRef1 = document.querySelector('.js-coords1');
const coordsOutputRef2 = document.querySelector('.js-coords2');

let mouseMoveCbInvocationCounter = 0;
let mouseMoveCbInvocationTrottleCounter = 0;

window.addEventListener('mousemove', onMouseMove);
window.addEventListener('mousemove', _.throttle(onMouseMoveWithTrottle, 300));

function onMouseMove(event) { 
    mouseMoveCbInvocationCounter += 1;

    coordsOutputRef1.textContent = `
        Кількість викликів onMouseMove: ${mouseMoveCbInvocationCounter},
        X: ${event.clientX},
        Y: ${event.clientY}
    `;
}
function onMouseMoveWithTrottle(event) { 
    mouseMoveCbInvocationTrottleCounter += 1;

    coordsOutputRef2.textContent = `
        Кількість викликів onMouseMove за допомогою trottle : ${mouseMoveCbInvocationTrottleCounter},
        X: ${event.clientX},
        Y: ${event.clientY}
    `;
}
// input та debounce

const inputRef = document.querySelector('.js-input');

const outputRef = document.querySelector('.js-output1');
const outputDebounceRef = document.querySelector('.js-output2');

let inputCbInvocationCounter = 0;
let inputDebounceCbInvocationCounter = 0;

inputRef.addEventListener('input', onInputChange);
inputRef.addEventListener('input', _.debounce(debounceOnInputChange, 400));

function onInputChange(event) { 
    inputCbInvocationCounter += 1;

    outputRef.textContent = `
        Кільість викликів onInputChange: ${inputCbInvocationCounter},
        Значення: ${event.target.value}
    `;
}
function debounceOnInputChange(event) { 
    inputDebounceCbInvocationCounter += 1;

    outputDebounceRef.textContent = `
        Кільість викликів onInputChange через debounce: ${inputDebounceCbInvocationCounter},
        Значення: ${event.target.value}
    `;
}
