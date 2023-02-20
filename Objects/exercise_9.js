// What does the following program log to the console? Why?

let foo = {
  a: 'hello',
  b: 'world',
};

let qux = 'hello';

function bar(argument1, argument2) {
  argument1.a = 'hi';
  argument2 = 'hi';
}

bar(foo, qux);

console.log(foo.a);
console.log(qux);

/* Solution
// The above program logs `'hi'` and `'hello'` to the console. This is because
// objects are mutable and primitve values are not. The reassignment of the
// `a` key's value within the `foo` variable mutates that value within the
// object. However, because `argument2` is a local variable initialized within
// the block, when it is reassigned to `'hi'` on `line 12`, this does nothing
// to the original variable. It just points the `argument2` block-scoped local
// variable to another value altogether.
*/