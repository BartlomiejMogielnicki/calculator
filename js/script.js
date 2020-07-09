const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const clearButton = document.querySelector('[data-clear]');
const previousOperandEl = document.querySelector('[data-previous-operand]');
const currentOperandEl = document.querySelector('[data-current-operand]');

let previousOperand, currentOperand, operation;

const clear = () => {
    previousOperand = '';
    currentOperand = '';
    operation = undefined;
};

clear();

const inputNumber = (number) => {
    if (number === ',' && currentOperand.includes(',')) {
        return;
    }
    currentOperand = currentOperand.toString() + number.toString();
};

const pickOperation = () => {

};

const compute = () => {

};

const updateScreen = () => {
    previousOperandEl.innerHTML = previousOperand;
    currentOperandEl.innerHTML = currentOperand;
};

// Event listeners
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        inputNumber(button.innerHTML);
        updateScreen();
    });
});