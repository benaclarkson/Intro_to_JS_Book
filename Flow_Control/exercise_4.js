// What does the following code log to the console, and why?

function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '113':
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found!');
  }
}

barCodeScanner('113');

// The following will be logged to the console:
// Product2
// Product3
// Product not found!
//
// This is due to the fact that the keyword `break` is not used in the `switch`
// statement anywhere. Since that keyword is lacking, the code "falls through"
// after the `case '113':` statement on `line 7` and each subsequent
// `console.log()` statement is ran.