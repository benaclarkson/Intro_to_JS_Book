// Take a look at this code snippet:

let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);

// What does this program log to the console? Why?

// The above code logs the string `bar` to the console. `line 8` knows nothing
// of `line 5` because of the block scope in which the variable `foo` is
// declared on `line 5`. Therefore, `line 8` logs the only `foo` variable within
// scope: that of the one which exists on `line 3`.