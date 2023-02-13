// Explain why this code logs '510' instead of 15.

console.log('5' + 10);

// The code above logs the string '510' instead of the number 15, due to
// implicit type coercion where the Number data type 10 is converted
// into a string, then concatenated to the existing String data type, '5'.