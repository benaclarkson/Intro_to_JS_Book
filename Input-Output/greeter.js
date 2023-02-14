// Exercise 1
// Write a dynamic greeter program named greeter.js. The program should ask for your name, then output Hello, {name}! where {name} is the name you entered:

// $ node greeter.js
// What is your name? Sue
// Hello, Sue!

// Solution
// let rlSync = require('readline-sync');
// let name = rlSync.question('What is your name? ');
// console.log(`Hello, ${name}!`);


// Exercise 2
// Modify the greeter.js program to ask for the user's first and last names separately, then greet the user with their full name.

// Solution
let rlSync = require('readline-sync');
let firstName = rlSync.question('What is your first name? ');
let lastName = rlSync.question('What is your last name? ');
console.log(`Hello, ${firstName} ${lastName}!`);