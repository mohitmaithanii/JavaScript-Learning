//! Number - JavaScript has built-in support for integer and floating point numbers.

// Integer: A numeric value without a decimal point, ex: 100
const score = 100;
console.log(score); // Output: 100

// Wrap a number in the Number object to create a Number object.
const balance = new Number(100);
console.log(balance); // Output: [Number: 100]

// Convert the Number object to a string and check its length.
console.log(balance.toString().length); // Output: 3

// Format the number to have 2 decimal places.
console.log(balance.toFixed(2)); // Output: 100.00

const otherNumber = 123.9282;
console.log(otherNumber.toPrecision(4)); // Output: 123.9

const hundreds = 1000000;
console.log(hundreds.toLocaleString()); // Output: 10,00,000 (locale-specific formatting)

//! Math - JavaScript has a built-in Math object that contains mathematical functions and constants.

console.log(Math); // Output: Object [Math] { }

// Absolute value of a number.
console.log(Math.abs(-4)); // Output: 4

// Round a number to the nearest integer.
console.log(Math.round(4.3)); // Output: 4
console.log(Math.round(4.9)); // Output: 5

// Round a number towards positive infinity.
console.log(Math.ceil(4.2)); // Output: 5

// Round a number towards negative infinity.
console.log(Math.floor(4.9)); // Output: 4

// Find the smallest of a list of numbers.
console.log(Math.min(3, 2, 5, 9, 1)); // Output: 1

// Find the largest of a list of numbers.
console.log(Math.max(3, 2, 5, 9, 1)); // Output: 9

// Generate a random number between 0 (inclusive) and 1 (exclusive).
console.log(Math.random());

// Generate a random number between 1 and 10 (inclusive).
console.log(Math.random() * 10 + 1);

// Generate a random integer between 1 and 10 (inclusive).
console.log(Math.floor(Math.random() * 10) + 1);

// Generate a random integer between a given range.
const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
