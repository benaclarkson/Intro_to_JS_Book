/* Add a qux property with value 3 to the myObj object we created in the
// previous exercise. Now, examine the following code snippets: */

let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);

myObj.qux = 3;

let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
});

for (let key in myObj) {
  console.log(key);
}

/* Without running this code, can you determine whether these two snippets
// produce the same output? Why?

// Solution
// The above code snippets do not produce the same output. This is because
// `Object.keys()` only creates an array of the caller's own keys, not the
// However, the second code snippet iterates through both the caller's own
// and the prototype's keys.
*/