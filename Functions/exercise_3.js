// Write a program that uses a multiply function to multiply two numbers and returns the result. Ask the user to enter the two numbers, then output the numbers and result as a simple equation.

// $ node multiply.js
// Enter the first number: 3.141592653589793
// Enter the second number: 2.718281828459045
// 3.141592653589793 * 2.718281828459045 = 8.539734222673566

// Solution
function multiply(number1, number2) {
  return number1 * number2;
}

function getResponse(prompt) {
  let rlSync = require('readline-sync');
  return rlSync.question(prompt);
}

let num1 = Number(getResponse('Enter the first number: '));
let num2 = Number(getResponse('Enter the second number: '));

console.log(`${num1} * ${num2} = ${multiply(num1, num2)}`)