const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const clearButton = document.querySelector('[data-clear]');
const swapSign = document.querySelector('[data-swap]');
const previousOperandEl = document.querySelector('[data-previous-operand]');
const currentOperandEl = document.querySelector('[data-current-operand]');

let previousOperand, currentOperand, operation;

const clear = () => {
    previousOperand = '';
    currentOperand = '';
    operation = undefined;
};

clear();

// Input numbers to screen and allow only one comma sign
const inputNumber = (number) => {
    if (number === ',' && currentOperand.includes(',')) {
        return;
    };
    currentOperand = currentOperand.toString() + number.toString();
};


// Pick math operation
const pickOperation = (operationSign) => {
    if (currentOperand === '') {
        return;
    };
    if (previousOperand !== '') {
        compute();
    };
    operation = operationSign;
    previousOperand = currentOperand;
    currentOperand = '';
};

// Compute
const compute = () => {
    let computation;
    const prevNumber = parseFloat(previousOperand);
    const currentNumber = parseFloat(currentOperand);
    if (isNaN(prevNumber) || isNaN(currentNumber)) {
        return;
    };
    switch (operation) {
        case '+':
            computation = prevNumber + currentNumber;
            break;
        case '-':
            computation = prevNumber - currentNumber;
            break;
        case '/':
            computation = prevNumber / currentNumber;
            break;
        case 'x':
            computation = prevNumber * currentNumber;
            break;
        case '%':
            computation = (prevNumber / currentNumber) * 100;
            break;
        default:
            return;
    };
    currentOperand = computation;
    operation = undefined;
    previousOperand = '';
};

// Update previous and current operands on the screen
const updateScreen = () => {
    previousOperandEl.innerHTML = previousOperand;
    currentOperandEl.innerHTML = currentOperand;
};

// Event listeners
// Number buttons
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        inputNumber(button.innerHTML);
        updateScreen();
    });
});

// Operation buttons
operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        pickOperation(button.innerHTML);
        updateScreen();
    });
});

// Equals button
equalsButton.addEventListener('click', () => {
    compute();
    updateScreen();
});