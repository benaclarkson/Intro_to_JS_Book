// What does the following code log to the console?

function scream(words) {
  words = words + '!!!!';
  return;
  console.log(words);
}

scream('Yipeee');

// The following code does not log anything to the console. This is due
// to the `return` statement on `line 5`. When the `return` keyword
// is used, this halts the execution of the function prior to the stack
// arriving at `line 6`.