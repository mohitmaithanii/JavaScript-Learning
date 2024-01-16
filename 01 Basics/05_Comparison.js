//! Comparison of data types in Javascript:
//* the comparison operators (`>`, `<`, `>=`, `<=`, `==`, and `!=`) are used to compare two values and determine their relative order or equality.

console.log(2 > 2); // Output: false
console.log(2 < 2); // Output: false
console.log(2 >= 2); // Output: true
console.log(2 <= 2); // Output: true
console.log(2 == 2); // Output: true
console.log(2 != 2); // Output: false

//* Confusing code:
//* when comparing values of different data types, JavaScript may behave in unexpected ways. This can lead to confusion and errors in your code.

console.log("2" > 1); // Output: true
console.log("02" > 1); // Output: false

console.log(null > 0); // Output: false
console.log(null == 0); // Output: false
console.log(null >= 0); // Output: true

console.log(undefined == 0); // Output: false
console.log(undefined > 0); // Output: false
console.log(undefined < 0); // Output: false

//* Strict check (===)

// This log will return false, because 2 is a number and "2" is a string
console.log(2 === "2"); // Output: false

console.log(true === 1); // Output: false
