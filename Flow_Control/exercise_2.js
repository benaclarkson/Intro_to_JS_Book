/* Write a function, evenOrOdd, that determines whether its argument is an even
// number. If it is, the function should log 'even' to the console; otherwise,
// it should log 'odd'. For now, assume that the argument is always an integer. */

// Solution 1
function evenOrOdd(num) {
  let isEven = num % 2 === 0 ? true : false;
  
  switch (isEven) {
    case true:
      console.log('even');
      break;
    case false:
      console.log('odd');
      break;
    default:
      console.log('neither even, nor odd');
      break;
  }
}

evenOrOdd(6);

// Solution 2
let evenOrOdd = (num) => {
  if (num % 2 === 0) {
    console.log('even');
  } else if (num % 2 !== 0) {
    console.log('odd');
  } else {
    console.log('neither even, nor odd');
  }
}

evenOrOdd(4);