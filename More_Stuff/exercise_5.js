// What does the following function do?

function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}

/* Solution
// The above code aceepts 1 argument, a string. It takes that argument and splits
// it on any spaces, returning an array of the different words in the string.
// That returned, split array is then reversed. Then, through the implicit
// return value of the `map` arrow function, the length of each string element
// within the array is returned, mutating the array. Finally, the mutated array
// becomes the return value of invoking the `doSomething()` function.
*/

console.log(doSomething('Mary had a little lamb.')); // [ 5, 6, 1, 3, 4 ]