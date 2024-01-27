//! Functions and Parameters:
//* A function is a block of code that performs a specific task.

// Define a simple function
function sayMyName() {
   console.log("I am a function");
}

// Call the function to execute its code
sayMyName(); // Output: I am a function

// Define a function with parameters
function addTwoNumbers(num1, num2) {
   // Parameters
   console.log(num1 + num2);
}

// Call the function with arguments
addTwoNumbers(3, 4); // Arguments

// Redefine the addTwoNumbers function to use return statement and store the result
function addTwoNumbers(num1, num2) {
   /* let result = num1 + num2;
   return result; */

   // Return the sum of the two numbers directly
   return num1 + num2;
}

// Call the function and store the result in a variable
const result = addTwoNumbers(3, 4);

console.log(`result: ${result}`); // Output: result: 7

// Define a function with a parameter to generate a login message
function loginUserMessage(username) {
   return `${username} just logged in`;
}

console.log(loginUserMessage("Mohit")); // Output: Mohit just logged in

// (default to undefined)
console.log(loginUserMessage()); // Output: undefined just logged in

// function to handle undefined username
function loginUserMessage(username) {
   if (!username) {
      console.log("Please enter a username"); // Output: Please enter a username
      return;
   }
   return `${username} just logged in`;
}

console.log(loginUserMessage()); // Output: undefined

// function with a default value for the username parameter
function loginUserMessage(username = "Amit") {
   return `${username} just logged in`;
}

console.log(loginUserMessage()); // Output: Amit just logged in
