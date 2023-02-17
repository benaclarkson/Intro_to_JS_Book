// What does this code output to the console?

function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
    console.log('Empty');
  }
}

isArrayEmpty([]);

// The string `'Not Empty'` is output to the console. This is an example of
// truthiness. An empty array still evaluates to true, which caused the
// `console.log()` statement on `line 5` to run.