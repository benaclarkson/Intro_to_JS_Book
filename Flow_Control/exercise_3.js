/* Let's improve our previous implementation of evenOrOdd. Add a validation
// check to ensure that the argument is an integer. If it isn't, the function
// should issue an error message and return. */

// Solution 1
// function evenOrOdd(num) {
//   if (!Number.isInteger(num)) {
//     console.log('Error. Input invalid. Please enter an integer.')
//     return;
//   }

//   let isEven = num % 2 === 0 ? true : false;
  
//   switch (isEven) {
//     case true:
//       console.log('even');
//       break;
//     case false:
//       console.log('odd');
//       break;
//     default:
//       console.log('neither even, nor odd');
//       break;
//   }
// }

// evenOrOdd('Hello');
// evenOrOdd(1.3472);
// evenOrOdd(6);

// Solution 2
let evenOrOdd = (num) => {
  let validInt = Number.isInteger(num) ? true : false;

  if (!validInt) {
    console.log('Error. Input invalid. Please enter an integer.');
    return;
  } else if (num % 2 === 0) {
    console.log('even');
  } else if (num % 2 !== 0) {
    console.log('odd');
  } else {
    console.log('neither even, nor odd');
  }
}

evenOrOdd('Hello');
evenOrOdd(1.3472);
evenOrOdd(6);