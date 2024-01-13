//! JavaScript Variables and Constants

//! Variables:
//* Variables are used to store data that can change during the execution of a program.

//* variables are declared using the `let` keyword.

let accountNumber; // initialization
accountNumber = 112122; // declaration

// print statement
console.log(accountNumber);

//! Constants:
//* Once declared, the value of a constant can't be changed. constants are declared using the `const` keyword.

const accountId = 144551;
console.log(accountId);

//! Re-assigning Variables:
//* Let variables can be re-assigned, which means that their values can be changed during the execution of a program.

let accountEmail = "xyz@gmail.com";
console.log(accountEmail);

accountEmail = "abc@gmail.com";
console.log(accountEmail);

//! Var Keyword:
//* The `var` keyword is an older way of declaring variables in JavaScript. It is still supported, but it is recommended to use the `let` keyword instead.

//? The `var` keyword has some issues with block scope and functional scope
var accountPassword = "12345";
console.log(accountPassword);

//! Global Variables:

/* Don't use this as it will create a global variable

accountCity = "Delhi";
console.log(accountCity); */
