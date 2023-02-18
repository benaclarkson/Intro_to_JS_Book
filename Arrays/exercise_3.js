/* Let's make the problem a little harder. In this problem, we're again
// interested in even numbers, but this time the numbers are in nested arrays
// in a single outer array. */

let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

// Solution 1
myArray.forEach(subArray => {
  subArray.forEach(num => {
    if (num % 2 === 0) {
      console.log(num);
    }
  })
})

// Solution 2
for (let arrIndex = 0; arrIndex < myArray.length; arrIndex += 1) {
  for (let index = 0; index < myArray[arrIndex].length; index += 1) {
    let currNum = myArray[arrIndex][index];

    if (currNum % 2 === 0) {
      console.log(currNum);
    }
  }
}

// Solution 3
myArray.forEach(subArray => {
  let evenElements = subArray.filter(num => {
    return num % 2 === 0;
  })

  evenElements.forEach(num => {
    console.log(num);
  })
})