// Using arithmetic operators, get the individual digits of a 4-digit number like 4936:

// thousands place is 4
// hundreds place is 9
// tens place is 3
// ones place is 6

function newNum(n, place) {
  n = (n - place) / 10;
  return n;
}

let num = 4936;

let ones = num % 10;
console.log('ones = ', ones);

num = newNum(num, ones);

let tens = num % 10;
console.log('tens = ', tens);

num = newNum(num, tens);

let hundreds = num % 10;
console.log('hundreds = ', hundreds);

let thousands = newNum(num, hundreds);
console.log('thousands = ', thousands);
