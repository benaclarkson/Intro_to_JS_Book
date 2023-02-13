// Refactor the code from the previous exercise to use explicit coercion, so it logs 15 instead.

// Original code
console.log('5' + 10);

// Refactored to log 15
// Solution 1
console.log(parseInt('5') + 10);

// Solution 2
console.log(Number('5') + 10);