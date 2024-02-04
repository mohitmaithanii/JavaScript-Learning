//! for of:
//* - iterating over an array or a string

// 1:
const arr = [1, 2, 3, 4, 5];

for (const number of arr) {
   console.log(number);
}

// 2:
const greeting = "hello world";

for (const greet of greeting) {
   console.log(`Each char is ${greet}`);
}

//! Maps:

const map = new Map();

// setting key-value pairs in the map
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
// map.set("IN", "India"); maps don't duplicate the values

console.log(map);

for (const [key, value] of map) {
   console.log(`${key} : ${value}`);
}

const myObject = {
   game1: "PUBG",
   game2: "Free Fire",
};

/* for (const [key, value] of myObject) {
   console.log(`${key} : ${value}`);
} */

// Note: for...of loop cannot be used to iterate over an object's properties
// Instead, we can use for...in loop or Object.keys() method
