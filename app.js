//Number button selectons
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const zero = document.querySelector('#zero');


// display value
const displayNum = document.querySelector('.display');

// operator selections
const addButton = document.getElementById('add');
const subButton = document.getElementById('subtract');
const multiButton = document.getElementById('multiply');
const divButton = document.getElementById('divide');
const equalButton = document.getElementById('equals');
const clearButton = document.getElementById('clear');

let counter = '';
let operator = null;
let n1 = null;
let n2 = null;

// operators

addButton.addEventListener('click', function(){
    operator = add;
    n1 = Number(counter);
    counter = '';
})

subButton.addEventListener('click', function(){
    operator = subtract;
    n1 = Number(counter);
    counter = '';
})

multiButton.addEventListener('click', function(){
    operator = multiply;
    n1 = Number(counter);
    counter = '';
})

divButton.addEventListener('click', function(){
    operator = divide;
    n1 = Number(counter);
    counter = '';
})

equalButton.addEventListener('click', function(){
    n2 = Number(counter);
    displayNum.innerText = operate(n1,n2,operator);
})

// Number Buttons
one.addEventListener('click', function(){
    counter += "1";
    displayNum.innerText = counter;
    
})

two.addEventListener('click', function(){
    counter += "2";
    displayNum.innerText = counter;
    
})

three.addEventListener('click', function(){
    counter += "3";
    displayNum.innerText = counter;
    
})

four.addEventListener('click', function(){
    counter += "4";
    displayNum.innerText = counter;
    
})

five.addEventListener('click', function(){
    counter += "5";
    displayNum.innerText = counter;
    
})

six.addEventListener('click', function(){
    counter += "6";
    displayNum.innerText = counter;
    
})

seven.addEventListener('click', function(){
    counter += "7";
    displayNum.innerText = counter;
    
})

eight.addEventListener('click', function(){
    counter += "8";
    displayNum.innerText = counter;
    
})

nine.addEventListener('click', function(){
    counter += "9";
    displayNum.innerText = counter;
    
})

zero.addEventListener('click', function(){
    counter += "0";
    displayNum.innerText = counter;
    
})

// ALL Clear Button
clearButton.addEventListener('click', function(){
    counter = '';
    displayNum.innerText = 0;
})

// Addition 
function add (n1,n2){
    return n1 + n2;
}

// Subtraction

function subtract (n1,n2){
    return n1 - n2;
}

// Divison
function divide (n1,n2){
    return n1 / n2;
}


// Multiplication
function multiply (n1, n2){
    return n1 * n2;
}

function operate (n1,n2,operator){
    return operator(n1,n2);
}