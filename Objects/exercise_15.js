/* Identify all of the variables, object property names, primitive values, and
// objects in the following code. This problem is even more challenging than
// the previous one. */

function bar(arg1, arg2) {
  let foo = 'Hello';
  const qux = {
    abc: [1, 2, 3, [4, 5, 6]],
    def: null,
    ghi: NaN,
    jkl: foo,
    mno: arg1,
    pqr: arg2,
  };

  return qux;
}

let result = bar('Victor', 'Antonina');

/* Note that some items in this program may appear in multiple categories.

// Solution

// Variables
// bar
// arg1
// arg2
// foo
// qux
// result

// Object Property Names
// 'abc'
// 0
// 1
// 2
// 3
// 0
// 1
// 2
// 'def'
// 'ghi'
// 'jkl'
// 'mno'
// 'pqr'

// Primitive Values
// 'Hello'
// 'abc'
// 0
// 1
// 2
// 3
// 1
// 2
// 3
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 'def'
// null
// 'ghi'
// NaN
// 'jkl'
// 'mno'
// 'pqr'
// 'Victor'
// 'Antonina'

// Objects
// bar
// [1, 2, 3, [4, 5, 6]]
// [4, 5, 6]
// {
    abc: [1, 2, 3, [4, 5, 6]],
    def: null,
    ghi: NaN,
    jkl: foo,
    mno: arg1,
    pqr: arg2,
  }

*/