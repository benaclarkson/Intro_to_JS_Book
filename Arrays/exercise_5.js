/* Write a findIntegers function that takes an array argument and returns an
// array that contains only the integers from the input array. Use the filter
// method in your function. */

// Solution
function findIntegers(arr) {
  return arr.filter(el => {
    return Number.isInteger(el);
  })
}

let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let integers = findIntegers(things);
console.log(integers); // => [1, 3, -4]
 
/* You can use Number.isInteger(value) to determine whether a numeric value is
// an integer. It returns true if the value is an integer, false otherwise. */