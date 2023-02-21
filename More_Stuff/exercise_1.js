// What does this code log to the console? Why?

let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2);

/* Solution
// The above code logs the array `[1, 4, 3]` to the console. This is because
// when the variable `array2` is initialized on `line 4`, it is set the value
// of the array initialized on `line 3`. Because both the `array1` and `array2`
// variables point to the same array, mutating the original array affects both
// variables that have been declared. */