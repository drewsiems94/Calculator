
const display = document.getElementById('display');
let displayValue = '';

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
    return (a / b);
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

//return nodelist containing references to all buttons
const buttons = document.querySelectorAll('.btn');

//for each button in our nodelist, add event listener
buttons.forEach(button => {
    button.addEventListener('click', function displayClick () {
        displayValue = displayValue + button.value;
        display.textContent = displayValue;
    });
});

