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
