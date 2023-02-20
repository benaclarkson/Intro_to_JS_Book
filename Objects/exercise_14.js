/* Identify all of the variables, object property names, primitive values, and
// objects shown in the following code (assume the code has not been executed).
// Don't panic if you miss a few items - this exercise is more challenging than
// it looks. */

function hello(greeting, name) {
  return greeting + ' ' + name;
}

function xyzzy() {
  return { a: 1, b: 2, c: [3, 4, 5], d: {} };
}

const howdy = hello('Hi', 'Grace');
let foo = xyzzy();

/* Solution

// Variables
// hello
// xyzzy
// greeting
// name
// howdy
// foo

// Object Property Names
// 'a'
// 'b'
// 'c'
// 'd'
// 0
// 1
// 2

// Primitive Values
// ' '
// 'a'
// 1
// 'b'
// 2
// 'c'
// 3
// 4
// 5
// 'd'
// 'Hi'
// 'Grace'
// 0
// 1
// 2

// Objects
// hello
// xyzzy
// { a: 1, b: 2, c: [3, 4, 5], d: {} }
// [3, 4, 5]
// {}

*/