// What happens when you run the following code? Why?

const NAME = 'Victor';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

NAME = 'Joe';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

// When we run the code, `lines 4-6` log greetings to the console. Then, when
// we encounter `line 8`, we receive an error. This is due to the reassignment
// attempt that occurs on the constant `NAME`.