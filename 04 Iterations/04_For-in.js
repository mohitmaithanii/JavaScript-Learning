//! for-in:

const myObject = {
   js: "javascript",
   cpp: "C++",
   rb: "ruby",
   py: "python",
};

// use a for-in loop to iterate over the properties of the object
for (const key in myObject) {
   console.log(`${key} : ${myObject[key]}`);
}

// create an array with some elements
const programming = ["Js", "Cpp", "Java", "Python"];

for (const key in programming) {
   console.log(`${key} : ${programming[key]}`);
}

// create a Map object with some key-value pairs
const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
// map.set("IN", "India"); maps don't duplicate the values

// this will NOT work as expected, because Map objects are not iterable in this way
for (const key in map) {
   console.log(key);
}

// instead, you can use the Map.prototype.forEach() method to iterate over the key-value pairs of a Map object
map.forEach((value, key) => {
   console.log(`${key} : ${value}`);
});
