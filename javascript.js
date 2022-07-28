
const display = document.getElementById('display');

//return nodelist containing references to all number buttons
const numButtons = document.querySelectorAll('.btnNum');
//return nodelist containing references to all operation buttons
const opButtons = document.querySelectorAll('.btnOp');

const equals = document.getElementById('equals');

let displayValue = '';
let firstValue;
let secondValue;
let operator = '';

function add(a, b) {
    return (a + b);
}
function subtract(a, b) {
    return (a - b);
}
function multiply(a, b) {
    return (a * b);
}
function divide(a, b) {
    if (b == 0) {
        return "Seriously?";
    } else {
        return (a / b);
    }
}
function operate(a, operator, b) {
    if (operator == "+") {
        return add(a, b);
    } else if (operator == "-") {
        return subtract(a, b);
    } else if (operator == "*") {
        return multiply(a, b);
    } else if (operator == "/") {
        return divide(a, b);
    }
}

//for each button in our nodelist, add event listener
numButtons.forEach(button => {
    button.addEventListener('click', function displayClick () {
        display.textContent = '';
        displayValue = displayValue + button.value;
        //displayValue is a string
        display.textContent = displayValue;
    });
});

opButtons.forEach(button => {
    button.addEventListener('click', function operateClick () {
    
        if (typeof firstValue == "number") {
            secondValue = Number(displayValue);
            firstValue = operate(firstValue, operator, secondValue);
            operator = button.value;
            displayValue = '';
            display.textContent = '';
            display.textContent = firstValue;
            
        } else {
            firstValue = Number(displayValue);
            operator = button.value;
            displayValue = '';
        }
    });
});

equals.addEventListener('click', function equalClick () {
    secondValue = Number(displayValue);
    displayValue = operate(firstValue, operator, secondValue);
    firstValue = '';
    display.textContent = '';
    display.textContent = displayValue;
});

