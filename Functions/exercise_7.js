// Without running the following code, what do you think it will output?

function foo(bar, qux) {
  console.log(bar);
  console.log(qux);
}

foo('Hello');

// The following code will log the string `'Hello'` to the console, then it
// will log `undefined` to the console. This is because the function
// declaration `foo` requires two arguments to be passed in and only one,
// `'Hello'` is passed in on `line 8`. Because no second argument is passed
// into the function invocation, the parameter `qux` defaults to `undefined`.