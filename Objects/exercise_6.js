/* Which of the following values are primitive values? Which are objects?
// Which are neither? */

"foo"                             // Primitive Value
3.1415                            // Primitive Value
[ 'a', 'b', 'c' ]                 // Object
false                             // Primitive Value
foo                               // Neither
function bar() { return "bar"; }  // Object
undefined                         // Primitive Value
{ a: 1, b: 2 }                    // Object