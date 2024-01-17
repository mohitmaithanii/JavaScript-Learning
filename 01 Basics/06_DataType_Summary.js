//! Data types in JavaScript:
//* In JavaScript, data types specify the type of value that a variable can hold. There are two main categories of data types: primitive data types and non-primitive (reference) data types.

//! Primitive data types:
//* Primitive data types are simple data types that hold a single value. They are immutable, meaning that their values cannot be changed.

// 1. Number:
const score = 100;
console.log(typeof score); // number

// 2. String:
const name = "mohit";
console.log(typeof name); // string

// 3. Boolean:
const isLoggedIn = true;
console.log(typeof isLoggedIn); // boolean

// 4. Null:
const temp = null;
console.log(typeof temp); // object

// 5. Undefined:
let username;
console.log(typeof username); // undefined

// 6. Symbol:
const id = Symbol("123");
console.log(typeof id); // symbol

// 7. BigInt:
const bigNumber = 12121342444444442233n;
console.log(typeof bigNumber); // bigint

//! Non-primitive (reference) data types:
//* Non-primitive data types are complex data types that can hold multiple values. They are mutable, meaning that their values can be changed.
// 1. Array:
const heros = ["spiderman", "batman", "superman"];
console.log(typeof heros); // object

// 2. Objects:
const myObj = {
   name: "mohit",
   age: 21,
};
console.log(typeof myObj); // object

// 3. Functions:
const myFunction = function () {
   console.log("hello world");
};
console.log(typeof myFunction); // function
