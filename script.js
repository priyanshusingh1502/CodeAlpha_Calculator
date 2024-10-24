let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let firstOperand = null;

function appendNumber(number) {
    currentInput += number;
    display.innerText = currentInput;
}

function appendOperation(op) {
    if (currentInput === '') return;
    if (firstOperand === null) {
        firstOperand = parseFloat(currentInput);
    } else {
        firstOperand = operate(firstOperand, parseFloat(currentInput), operator);
    }
    operator = op;
    currentInput = '';
    display.innerText = firstOperand + ' ' + operator;
}

function clearDisplay() {
    currentInput = '';
    operator = '';
    firstOperand = null;
    display.innerText = '';
}

function calculateResult() {
    if (currentInput === '' || firstOperand === null) return;
    let secondOperand = parseFloat(currentInput);
    let result = operate(firstOperand, secondOperand, operator);
    display.innerText = result;
    currentInput = '';
    operator = '';
    firstOperand = null;
}

function operate(a, b, op) {
    switch (op) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            return b;
    }
}
