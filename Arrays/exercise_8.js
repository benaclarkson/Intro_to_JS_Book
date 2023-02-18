/* This problem is more challenging than most in this book. Don't worry if you
// can't solve it on your own.

// Write a function similar to the oddLengths function from Exercise 6, but
// don't use map or filter. Instead, try to use the reduce method.

// From Exercise 6:
// Use map and filter to first determine the lengths of all the elements in an
// array of string values, then discard the even values (keep the odd values). */

function oddLengths(array) {
  return array.reduce((acc, curr) => {
    let currLength = curr.length;
    
    if (currLength % 2 !== 0) {
      acc.push(currLength);
    }

    return acc;
  }, []);
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]