// In the exercises for the previous chapter, you wrote a dynamic greeter program named greeter.js. Add a function to this program that solicits the user's first and last names in separate invocations; the function should return the appropriate name as a string. Use the return values to greet the user with their full name.

// Solution
function captureResponse(userPrompt) {
  let rlSync = require('readline-sync');
  return rlSync.question(userPrompt);
}

let firstName = captureResponse('What is your first name? ');
let lastName = captureResponse('What is your last name? ');

console.log(`Hello, ${firstName} ${lastName}!`);