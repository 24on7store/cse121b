/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */


/* Function Expression - Subtract Numbers */


/* Arrow Function - Multiply Numbers */


/* Open Function Use - Divide Numbers */


/* Decision Structure */


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

/* Output Odds Only Array */

/* Output Evens Only Array */

/* Output Sum of Org. Array */

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */

// Function Declaration
function add(number1, number2) {
    return number1 + number2;
  }
  
  function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
  }
  
  document.querySelector('#addNumbers').addEventListener('click', addNumbers);
  
  // Function Expression (Subtraction)
  const subtract = function(number1, number2) {
    return number1 - number2;
  };
  
  const subtractNumbers = function() {
    // Similar structure as addNumbers but for subtraction
  };
  
  // Arrow Functions (Multiplication)
  const multiply = (factor1, factor2) => factor1 * factor2;
  
  const multiplyNumbers = () => {
    // Similar structure as addNumbers but for multiplication
  };
  
  // Your Choice (Division)
  function divide(dividend, divisor) {
    return dividend / divisor;
  }
  
  function divideNumbers() {
    // Similar structure as addNumbers but for division
  }
  
  document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);
  
  // Selection Structures
  document.querySelector('#getTotalDue').addEventListener('click', () => {
    let subtotal = Number(document.querySelector('#subtotal').value);
    let membershipChecked = document.querySelector('#membership').checked;
  
    if (membershipChecked) {
      subtotal *= 0.85; // Apply 15% discount
    }
  
    document.querySelector('#total').innerText = `Total: $${subtotal.toFixed(2)}`;
  });
  
  // Array Methods - Functional Programming
  let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  document.querySelector('#array').innerText = numbersArray;
  
  document.querySelector('#odds').innerText = numbersArray.filter(number => number % 2 === 1);
  
  document.querySelector('#evens').innerText = numbersArray.filter(number => number % 2 === 0);
  
  document.querySelector('#sumOfArray').innerText = numbersArray.reduce((sum, number) => sum + number);
  
  document.querySelector('#multiplied').innerText = numbersArray.map(number => number * 2);
  
  document.querySelector('#sumOfMultiplied').innerText =
    numbersArray.map(number => number * 2).reduce((sum, number) => sum + number);
  