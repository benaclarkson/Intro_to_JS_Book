// What does this code log to the console? Does executing the foo function affect the output? Why or why not?

let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);

// The above code logs `1` to the console because the `bar` variable that is
// within scope on `line 9` is only the variable defined on `line 3`.

// Executing the `foo` function does not affect the output. This is because
// `line 5` actually initializes an entirely new `bar` variable than that of
// the one initialized on `line 3`.