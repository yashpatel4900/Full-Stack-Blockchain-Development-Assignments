// 1. Are Higher Order functions and Call back functions the same ? If not,briefly explain about both functions.

// Higher Order Functions or First Class Functions are functions which can be passed as an argument as well as
// could have been returned from a function

// Whereas Call back functionsare those which are called inside a function and a function waits for a
// callback function's execution

// 2. Is filter a Higher Order function in Javascript ? If yes, why ?

// When we use Array.filter, we provide a function as its only argument, which it applies to every element
// contained in the array and thats why its called Higher Order functions

// 3. Higher Order Function and Call Back Functions

// let add = (a, b) => {
//   return a + b;
// };

// let print = (a) => {
//   console.log(a);
// };

// function example(var1, var2, fun) {
//   let ans = add(var1, var2);
//   fun(ans);
// }

// example(2, 6, print);

// Here example is a Higher Order Functiona as it is passed as an argument and add is a callback function
// as its results is being retrived from calling it

// 4.

// OUTPUT
// Hello John
// Hello Tina
// Hello Kale
// Hello Max

//  Here useFunction is a Higher Order Function
