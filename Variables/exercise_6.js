// Will this program produce an error when run? Why or why not?

const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);

// The above code will not produce an error because the `const` variable
// declaration has block scope. If `line 5` was outside of a block, this
// code would produce an error.