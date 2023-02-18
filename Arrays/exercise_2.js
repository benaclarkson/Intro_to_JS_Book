// Log all of the even values from myArray to the console.

let myArray = [1, 3, 6, 11, 4, 2,
               4, 9, 17, 16, 0];

// Solution 1               
myArray.forEach(num => {
  if (num % 2 === 0) console.log(num);
});

// Solution 2
myArray.forEach(num => {
  let even = num % 2 === 0;

  switch (even) {
    case true:
      console.log(num);
      break;
    default:
      break;
  }
})

// Solution 3
let evenElements = myArray.filter(num => {
  return num % 2 === 0;
})

evenElements.forEach(num => console.log(num));

// Solution 4
for (let idx = 0; idx < myArray.length; idx += 1) {
  if (myArray[idx] % 2 === 0) {
    console.log(myArray[idx])
  }
}

// Expected Output

// 6
// 4
// 2
// 4
// 16
// 0