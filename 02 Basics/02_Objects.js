//! Objects in JavaScript:
//* Objects are a fundamental data structure in JavaScript that allow us to store and organize related data.

// Object literals

// Creating a symbol for use as an object key
const mySym = Symbol("key1");

// Creating an object using object literal syntax
const JsUser = {
   name: "Mohit",
   "full name": "Mohit Maithani",
   age: 21,
   location: "Gauchar",
   email: "xyz@gmail.com",
   isLoggedIn: true,
   lastLoggedIn: ["Monday", "Saturday"],
   [mySym]: "myKey1",
};

console.log(JsUser);

// Accessing a property using dot notation
console.log(JsUser.name);

// Accessing a property using bracket notation
console.log(JsUser["full name"]);

// Accessing a property using a symbol key
console.log(JsUser[mySym]);

// Freezing the object to prevent further modifications
//mObject.freeze(JsUser);

// Modifying a property value
JsUser.age = 22;

// Logging the modified object to the console
console.log(JsUser);

// Adding a method to the object
JsUser.greeting = function () {
   console.log(`Hello js User`);
};

JsUser.greetingTwo = function () {
   console.log(`Hello js User, ${this.name}`);
};

console.log(JsUser.greeting); // [Function (anonymous)]
console.log(JsUser.greeting()); // Hello js User
console.log(JsUser.greetingTwo()); // Hello js User, Mohit
