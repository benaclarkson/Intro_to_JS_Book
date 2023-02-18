/* Use map and filter to first determine the lengths of all the elements in an
// array of string values, then discard the even values (keep the odd values). */

// Solution 1
function oddLengths(array) {
  return array.map(function(el) {
    return el.length;
  })
  .filter(function(l) {
    return l % 2 !== 0;
  })
}

// Solution 2
let oddLengths = (array) => {
  let lengths = array.map(el => el.length);
  let oddLengthsArr = lengths.filter(l => l % 2 !== 0);

  return oddLengthsArr;
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

/* Note that it is possible to solve this problem without using map. However,
// our intent is to show how you can combine multiple functions to achieve a
// desired result. */