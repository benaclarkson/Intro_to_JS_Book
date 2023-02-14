// Write a program named greeter.js that greets 'Victor' three times. Your program should use a variable and not hard code the string value 'Victor' in each greeting. Here's an example run of the program:

// $ node greeter.js
// Good Morning, Victor.
// Good Afternoon, Victor.
// Good Evening, Victor.

// Solution 1
const Name = 'Victor';

console.log(`Good Morning, ${Name}.`);
console.log(`Good Afternoon, ${Name}.`);
console.log(`Good Evening, ${Name}.`);

// Solution 2
// Using const Name variable initialized on line 9

function greetPerson(greetings, n) {
  greetings.forEach(function (greeting) {
    console.log(`${greeting}, ${n}.`);
  })
}

let greetingsArray = ['Good Morning', 'Good Afternoon', 'Good Evening'];

greetPerson(greetingsArray, Name);

// Solution 3
// Using const Name variable initialized on line 9
// and greetingsArray array initialized on line 24

let greetPersonFatArrow = (greetings, n) => {
  greetings.forEach(greeting => {
    console.log(`${greeting}, ${n}.`);
  })
}

greetPersonFatArrow(greetingsArray, Name);
