/* Does the following code produce an error? Why or why not? What output does
// this code send to the console? */

for (let i = 0; i < 5;) {
  console.log(i += 1);
}

/* The above code does not produce an error. All parts of a standard `for` loop
// are optional (and they also exist here) though the increment is in an unusual
// location.
// This code outputs:
// 1
// 2
// 3
// 4
// 5
*/