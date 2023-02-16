// Without running the following code, what do you think it will output?

function foo(bar, qux) {
  console.log(bar);
  console.log(qux);
}

foo(42, 3.1415, 2.718);

// The above code will log the number `42` and then log the float `3.1415`.
// The third argument passed into the function invocation on `line 8` is
// ignored because there are only 2 parameters accepted in the original
// method declaration.