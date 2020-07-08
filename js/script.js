const keyboard = document.getElementById('keyboard');
const operation = document.getElementById('operation');
const result = document.getElementById('result');

const percent = document.getElementById('percent-bnt');
const negate = document.getElementById('negate-btn');
const clear = document.getElementById('clear-btn');
const divide = document.getElementById('divide-btn');
const multiply = document.getElementById('multiply-btn');
const minus = document.getElementById('minus-btn');
const add = document.getElementById('add-btn');
const comma = document.getElementById('comma-btn');
const equal = document.getElementById('equal-btn');

const clearScreen = () => {
    operation.textContent = '';
    result.textContent = 0;
};

const addOperation = (input) => {
    operation.innerHTML += input;
};

// Event listeners
keyboard.addEventListener('click', (e) => {
    addOperation(e.target.textContent);
});

clear.addEventListener('click', clearScreen);