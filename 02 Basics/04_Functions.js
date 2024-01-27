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

//! Functions with More Parameters

// Function that takes multiple parameters and returns an array of those parameters
function calculatePrice(...num1) {
   return num1;
}

console.log(calculatePrice(200)); // Output:  [200]
console.log(calculatePrice(200, 400, 500)); // Output:  [200, 400, 500]

function calculatePrice(val1, val2, ...num1) {
   return num1;
}
console.log(calculatePrice(200, 400, 500, 2000)); // Output: [ 500, 2000 ]

//! Functions with Object:

const user = {
   username: "mohit",
   id: 1221,
};

// Function that takes an object as a parameter and prints its properties
function handleObject(anyObject) {
   console.log(`Username is ${anyObject.username} and id is ${anyObject.id}`);
}

handleObject(user); // Output: Username is mohit and id is 1221

handleObject({
   username: "amit",
   id: 1333,
});

//! Functions with Array:

const myArray = [200, 400, 500, 600];

function returnSecondValue(getArray) {
   return getArray[1];
}

console.log(returnSecondValue(myArray)); // Output: 400
console.log(returnSecondValue([200, 400, 500, 600])); // Output: 400
