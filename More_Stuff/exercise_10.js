/* Challenging Exercise This exercise has nothing to do with this chapter.
// Instead, it uses concepts you learned earlier in the book. If you can't
// figure out the answer, don't worry: this question can stump developers with
// more experience than you have.

// Consider this code:

> let x = "5"
> x = x + 1
= "51"

// Now, consider this code:

> let y = "5"
> y++

// What gets returned by y++ in the second snippet, and why?

// Solution
// The number 5 is returned by the `y++` call. This is because the method call
// is post fixed to the variable. The increment method coerces the string to
// an integer, but it does not return an incremented value.