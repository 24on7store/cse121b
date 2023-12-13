/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
  return number1 + number2;
}

/* Function Declaration - addNumbers function*/
function addNumbers() {
  let addNumber1 = Number(document.querySelector('#add1').value);
  let addNumber2 = Number(document.querySelector('#add2').value);
  document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/*Function Expression - Subtraction Feature*/
const subtract = function (number1, number2) {
  return number1 - number2;
};

const subtractNumbers = () => {
  let subtractNumber1 = Number(document.querySelector('#subtract1').value);
  let subtractNumber2 = Number(document.querySelector('#subtract2').value);
  document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
};

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/*Arrow Functions - Multiplication Feature */
const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
  let factor1 = Number(document.querySelector('#factor1').value);
  let factor2 = Number(document.querySelector('#factor2').value);
  document.querySelector('#product').value = multiply(factor1, factor2);
};

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/*Division Feature using a combination of function types */
function divide(number1, number2) {
  return number1 / number2;
}

const divideNumbers = () => {
  let dividend = Number(document.querySelector('#dividend').value);
  let divisor = Number(document.querySelector('#divisor').value);
  document.querySelector('#quotient').value = divide(dividend, divisor);
};

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/*Selection Structures - Get Total Due Button */
document.querySelector('#getTotal').addEventListener('click', () => {  // Corrected ID
  let subtotal = Number(document.querySelector('#subtotal').value);
  let applyDiscount = document.querySelector('#member').checked;
  let total = applyDiscount ? subtotal * 0.8 : subtotal;  // Removed the unnecessary multiplication by 1
  document.querySelector('#total').innerText = `Total Due: $${total.toFixed(2)}`;
});



// /* ARRAY METHODS - Functional Programming */
// /* Output Source Array */
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.querySelector('#array').innerText = numbersArray;
/* Output Odds Only Array */
document.querySelector('#odds').innerText = numbersArray.filter(number => number % 2 !== 0).join(', '); 
/* Output Evens Only Array */
document.querySelector('#evens').innerText = numbersArray.filter(number => number % 2 === 0).join(', ');
/* Output Sum of Org. Array */
document.querySelector('#sumOfArray').innerText = numbersArray.reduce((sum, number) => sum + number, 0);
/* Output Multiplied by 2 Array */
let multipliedArray = numbersArray.map(number => number * 2);
document.querySelector('#multiplied').innerText = multipliedArray.join(', '); 
/* Output Sum of Multiplied by 2 Array */
document.querySelector('#sumOfMultiplied').innerText = multipliedArray.reduce((sum, number) => sum + number, 0);
