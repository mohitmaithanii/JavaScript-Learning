//* if: The `if` statement is used to execute a block of code if a specified condition is true.

const temperature = 41;

if (temperature < 50) {
   console.log("less than 50 ");
}
//* else: The `else` statement is used to execute a block of code if the condition in an `if` statement is false.
else {
   console.log("Greater than 50");
}
console.log("always execute");

const score = 200;

if (score > 100) {
   const power = "fly";
   console.log(`User power: ${power}`);
}

const balance = 1000;

// instead of using an if statement to check if the balance is greater than 500, simply log "test" to the console
// (this is just an example of what not to do)
// if (balance > 500) console.log("test");

//* else-if:  This adds on to the functionality of the `if` statement by allowing for multiple conditions.

if (balance < 500) {
   console.log("less than 500");
} else if (balance < 750) {
   console.log("less than 700");
} else if (balance < 900) {
   console.log("less than 900");
} else {
   console.log("less than 1000");
}

const userLoggedIn = true;
const debitCard = true;

// use an if statement to check if both userLoggedIn and debitCard are true
if (userLoggedIn && debitCard) {
   console.log("allowed");
}

const loggedInFromGoogle = false;
const loggedInFromEmail = true;

// use an if statement to check if either loggedInFromGoogle or loggedInFromEmail are true
if (loggedInFromGoogle || loggedInFromEmail) {
   console.log("user logged in");
}

//! Nullish Coalescing Operator (??): Null undefined

// The nullish coalescing operator??) returns the right-hand side operand if the left-hand side operand null or undefined.

let val1;
val1 = 5 ?? 10; // If val1 is not null or undefined, use its value (5). Otherwise, use the value after the ?? (10).
console.log(val1); // Output : 5

val1 = null ?? 10;
console.log(val1); // Output : 10

val1 = undefined ?? 15;
console.log(val1); // Output: 15

val1 = null ?? 10 ?? 20;
console.log(val1); // Output: 10

//! Ternary Operator:
// The ternary operator is a shorthand way of writing an if-else statement.

//* syntax: condition ? true : false

const iceTeaPrice = 100;

iceTeaPrice <= 80 // If the condition is true
   ? console.log("less than 80") // Run this code
   : console.log("more than 80"); // Otherwise, run this code
