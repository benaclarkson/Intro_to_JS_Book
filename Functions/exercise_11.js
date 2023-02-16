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

/* Using the code from Exercise 9, are the left and right variables on lines 1
and 2 the same as the left and right variables on lines 10-12?
Explain your reasoning.

The variables `left` and `right` on lines 1 and 2 are not the same as the
variables `left` and `right` on lines 10-12. This is because the variables
intialized as parameters on lines 1 and 2 have scope which is local to the
function declaration.
In contrast, the `left` and `right` variables on lines 10-12 have global scope.