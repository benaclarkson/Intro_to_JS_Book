// What happens when you run the following program? Why do we get that result?

{
  let foo = 'bar';
}

console.log(foo);

// When the log method is called on the console object using the variable `foo`
// as an argument, we receive an error. This is due to the scope of the variable
// `foo`. Because the variable was initialized within a block, the variable cannot
// be accessed outside of that block.