/* The following code causes an infinite loop (a loop that never stops
// iterating). Why? */

let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}

/* The above code causes an infinite loop because the variable `counter` is
// reassigned to `1` on `line 6` upon each iteration, which causes the
// conditional statement `if (counter > 2)` on `line 10` to never evaluate
// as true, thus, the `break` statement on `line 11` is never reached.