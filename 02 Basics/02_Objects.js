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

//* Singleton

// const tinderUser = new Object();
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Mohit";
tinderUser.loggedIn = false;

console.log(tinderUser); // { id: '123abc', name: 'Mohit', loggedIn: false }

const regularUser = {
   email: "abc@gmail.com",
   fullName: {
      userFullName: {
         firstName: "Mohit",
         lastName: "Maithani",
      },
   },
};

console.log(regularUser.fullName.userFullName.firstName); // Mohit

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj3 = { 5: "a", 6: "b" };

// const obj3 = {obj1, obj2};
// const obj4 = Object.assign({}, obj1, obj2, obj3);
const obj4 = { ...obj1, ...obj2, ...obj3 };
console.log(obj4); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

const users = [
   {
      id: 1,
      email: "a@gmail.com",
   },
   {
      id: 2,
      email: "b@gmail.com",
   },
   {
      id: 3,
      email: "c@gmail.com",
   },
   {
      id: 4,
      email: "d@gmail.com",
   },
];

console.log(users[1].email); // b@gmail.com
console.log(tinderUser); // { id: '123abc', name: 'Mohit', loggedIn: false }

console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'loggedIn' ]
console.log(Object.values(tinderUser)); // [ '123abc', 'Mohit', false ]
console.log(Object.entries(tinderUser)); // [ [ 'id', '123abc' ], [ 'name', 'Mohit' ], [ 'loggedIn', false ] ]
console.log(tinderUser.hasOwnProperty("loggedIn")); // true
