
const display = document.getElementById('display');
//return nodelist containing references to all number buttons
const numButtons = document.querySelectorAll('.btnNum');
//return nodelist containing references to all operation buttons
const opButtons = document.querySelectorAll('.btnOp');
const equals = document.getElementById('equals');
const clearBtn = document.getElementById('clearBtn');
const deleteBtn = document.getElementById('deleteBtn');
let numberTally = 0;

let displayValue = '';
let firstValue;
let secondValue;
let operator = '';

function add(a, b) {
    let result = (a + b);
    //if (result.toString().length <= 13) {
    return result;
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
        ++numberTally;
        if (numberTally == 13) {
            numButtons.forEach(button => button.disabled = true);
        }
        if (button.value == ".") {
            button.disabled = true;
        }
        display.textContent = '';
        displayValue = displayValue + button.value;
        //displayValue is a string
        display.textContent = displayValue;
    });
});

opButtons.forEach(button => {
    button.addEventListener('click', function operateClick () {
        numberTally = 0;
        numButtons.forEach(button => button.disabled = false);
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
    numberTally = 0;
    numButtons.forEach(button => button.disabled = false);
    if (typeof firstValue == "number") {
        secondValue = Number(displayValue);
        displayValue = operate(firstValue, operator, secondValue);
        firstValue = '';
        display.textContent = '';
        display.textContent = displayValue;
    }
});

//Wipes out any existing data
clearBtn.addEventListener('click', function clearClick () {
    numberTally = 0;
    numButtons.forEach(button => button.disabled = false);
    firstValue = '';
    secondValue = '';
    displayValue = '';
    operator = '';
    display.textContent = '';
});

deleteBtn.addEventListener('click', function backSpace () {
    displayValue = displayValue.slice(0, displayValue.length - 1);
    display.textContent = displayValue;
});