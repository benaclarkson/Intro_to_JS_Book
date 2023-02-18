/* Without using a for, while, or do/while loop, write some code that checks
// whether the number 3 appears inside these arrays: */

// Solution 1
function checkForThrees(arr) {
  return arr.includes(3);
}

// Solution 2
function checkForThrees(arr) {
  let anyThrees = arr.filter(num => {
    return num === 3;
  })

  return !!(anyThrees.length >= 1);
}

let numbers1 = [1, 3, 5, 7, 9, 11]; 
let numbers2 = [];                  
let numbers3 = [2, 4, 6, 8];        

console.log(checkForThrees(numbers1)); // true
console.log(checkForThrees(numbers2)); // false
console.log(checkForThrees(numbers3)); // false

// Return true or false depending on each result.