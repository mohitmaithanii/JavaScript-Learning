//! Operations in JavaScript

// Assigning a value to a variable
let value = 3;

// Unary negation operator, which negates the value of the variable
let negValue = -value;
console.log(negValue); // Output: -3

// Arithmetic operations
// console.log(2 + 2); // Addition
// console.log(2 - 2); // Subtraction
// console.log(2 * 2); // Multiplication
// console.log(2 ** 3); // Exponentiation (2 raised to the power of 3)
// console.log(2 / 3); // Division
// console.log(2 % 3); // Modulus (remainder of the division)

// Concatenating strings
let str1 = "hello";
let str2 = " mohit";

let str3 = str1 + str2;
console.log(str3); // Output: "hello mohit"

/*
tricky conversion: don't do this

When you mix different data types (string and number) in an addition operation, 
JavaScript will convert the number to a string and concatenate them instead of performing arithmetic addition.
*/
console.log("1" + 2); // Output: "12"
console.log(1 + "2"); // Output: "12"
console.log("1" + "2"); // Output: "12"
console.log("1" + 2 + 2); // Output: "122"
console.log(1 + 2 + "2"); // Output: "32"

// Type coercion using unary plus operator
console.log(+true); // Output: 1
console.log(+""); // Output: 0

// Assigning the same value to multiple variables
let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;

// Prefix and Postfix increment/decrement operators
// Prefix: increments the value first, then returns it
// Postfix: returns the value first, then increments it
let gameCounter = 100;
++gameCounter; // Output: 101
gameCounter++; // Output: 102
console.log(gameCounter); // Output: 102
