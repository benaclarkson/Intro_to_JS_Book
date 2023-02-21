/* Challenging Exercise This exercise has nothing to do with this chapter.
// Instead, it uses concepts you learned earlier in the book. If you can't
// figure out the answer, don't worry: this question can stump developers with
// more experience than you have.

// Earlier, we learned that Number.isNaN(value) returns true if value is the NaN
// value, false otherwise. You can also use Object.is(value, NaN) to make the
// same determination.

// Without using either of those methods, write a function named isNotANumber
// that returns true if the value passed to it as an argument is NaN, false if
// it is not. */

// Solution (possibly wrong with edge cases)
function isNotANumber(val) {
  if (!Number.isFinite(val) && typeof val === 'number') {
    return true;
  } else {
    return false;
  }
}

// Solution from LS
// function isNotANumber(value) {
//   return value !== value;
// }

console.log(isNotANumber(NaN));      // true
console.log(isNotANumber(10));       // false
console.log(isNotANumber('Hello'));  // false
console.log(isNotANumber(true));     // false