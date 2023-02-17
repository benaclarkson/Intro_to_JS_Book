/* Write a function that takes a string as an argument and returns an all-caps
version of the string when the string is longer than 10 characters.
Otherwise, it should return the original string. Example: change 'hello world'
to 'HELLO WORLD', but don't change 'goodbye'.*/

// Solution 1
function allCaps(str) {
  if (str.length > 10) {
    return str.toUpperCase();
  } else {
    return str;
  }
}

// Solution 2
let allCaps = (str) => str.length > 10 ? str.toUpperCase() : str;

allCaps('hello world');  // 'HELLO WORLD'
allCaps('goodbye');      // 'goodbye'