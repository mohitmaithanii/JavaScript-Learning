//! String in JavaScript:
//* Strings are sequences of characters enclosed in single or double quotes. They are used to represent text data and can be manipulated using various built-in methods and properties.

// Assign a string to a variable using double quotes
const name = "Mohit";

// Assign a number to a variable
const repoCount = 10;
// console.log(name + repoCount + " Value");

//! String interpolation:
//* String interpolation is a feature that allows you to embed variables or expressions inside a string. This is done using template literals, which are enclosed in backticks (` `).

console.log(`hello my name is ${name} and my repo count is ${repoCount}`); // Output: hello my name is Mohit and my repo count is 10

const myName = new String("Mohit-Maithani");

// Access the first character of the string using the bracket notation
console.log(myName[0]); // Output: M

// Print the prototype of the string object
console.log(myName.__proto__); // Output: {}

// Get the length of the string
console.log(myName.length); // Output: 14

// Convert the string to uppercase
console.log(myName.toUpperCase()); // Output: MOHIT MAITHANI

// Get the character at a specific index
console.log(myName.charAt(2)); // Output: h

// Get the index of the first occurrence of the specified character
console.log(myName.indexOf("t")); // Output: 4

//! Substring and slice methods:
//* The substring method returns a portion of a string between two specified indices.

const newString = myName.substring(0, 4);
console.log(newString); // Output: Mohi

//* The slice method returns a portion of a string between two specified indices, but it can also take a negative index.

const otherString = myName.slice(-8);
console.log(otherString); // Output: Maithani

//! Trim method:
//* The trim method removes whitespace from both ends of a string.

const newStringOne = "   Mohit    ";
console.log(newStringOne); //Output:    Mohit
console.log(newStringOne.trim()); //Output: Mohit

//! Replace method:
//* The replace method replaces a specified character or substring with another character or substring.

const url = "https://mohit%238maithani";
console.log(url.replace("%238", "-")); // Output: https://mohit-maithani

//! Includes method:
//* The includes method checks if a string contains a specified character or substring.

console.log(url.includes("mohit")); // Output: true

//! Split method:
//* The split method splits a string into an array of substrings based on a specified separator.

console.log(url.split("%238")); // Output: [ 'https://mohit', 'maithani' ]
