// Identify all of the variables named on each line of the following code.
// You may assume that question is the name of a built-in function in JavaScript
// (it is not, so this code won't work as written).

function multiply(left, right) {
  let product = left * right;
  return product;
}

function getNumber(prompt) {
  return parseFloat(question(prompt));
}

let left = getNumber('Enter the first number: ');
let right = getNumber('Enter the second number: ');
console.log(`${left} * ${right} = ${multiply(left, right)}`);

/*
// Global Variables:
// - multiply
// - getNumber
// - parseFloat
// - question
// - left
// - right
// - console

// Local Variables:
// - product
// - left
// - right
// - prompt
*/