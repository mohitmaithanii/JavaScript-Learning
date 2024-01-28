//! Scopes in JavaScript:

// Global scope: variables declared outside of any function or block are in the global scope
var c = 300;

if (true) {
   //Block scope: variables declared within a block (between {curly braces}) have block scope

   // let and const has block scope
   let a = 10;
   const b = 20;

   // var has global scope
   var c = 30;

   // Log the block scope variables
   console.log(`Inner: ${a}`); // Inner: 10
   console.log(`Inner: ${b}`); // Inner: 20
   console.log(`Inner: ${c}`); // Inner: 30
}

// Log the block scope variables outside the block

console.log(`Outer: ${a}`); // Outer: error
console.log(`Outer: ${b}`); // Outer: error
console.log(`Outer: ${c}`); // Outer: 30

// Declare another global variable with the same name
let a = 300;
console.log(`Another a: ${a}`); // Another a: 300

//! Nested Scope:
//* Nested scope occurs when a function is declared within another function. The inner function has access to the variables of the outer function, but the outer function does not have access to the variables of the inner function.

function one() {
   const username = "Mohit";

   function two() {
      const website = "Youtube";
      console.log(username); // Mohit
   }
   console.log(website); // error: 'website' is not defined in this scope
   two();
}
one();

if (true) {
   const username = "Mohit";

   if (username === "Mohit") {
      const website = " Youtube";
      console.log(username + website); // Mohit Youtube
   }
   console.log(website); // error
}
console.log(username); // error

//! Hoisting:
//* Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of current scope during the compilation phase.

console.log(addOne(5)); // 6 - The function declaration of 'addOne' is hoisted to the top of the current scope

function addOne(num) {
   return num + 1;
}

console.log(addTwo(5)); // error : Cannot access 'addTwo' before initialization - The variable declaration of 'addTwo' is hoisted to the top of the current scope, but the assignment is not

const addTwo = function (num) {
   return num + 2;
};
