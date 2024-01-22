//! Array:
//* An array is a data structure that stores a collection of elements of the same type. In JavaScript, arrays are zero-indexed, meaning that the first element in an array has an index of 0.

// Initialize an array
const myArr = [0, 1, 2, 3, 4, 5];
const myHeros = ["spiderman", "batman", "superman"];
const otherArr = new Array(1, 2, 3, 4); // same as [1, 2, 3, 4]

console.log(myArr);
console.log(myArr[0]); // access the first element of the array

//! Array Methods:

// Add elements to the end of the array
myArr.push(6);
myArr.push(7);

// Remove the last element from the array
myArr.pop();

// Add elements to the beginning of the array
myArr.unshift(0);

// Remove the first element from the array
myArr.shift();

console.log(myArr.includes(9)); // check if the array includes a certain value
console.log(myArr.indexOf(3)); // return the index of the first occurrence of a certain value

// Convert the array into a string
const newArr = myArr.join(); // by default, the elements are separated by a comma

console.log(myArr);
console.log(newArr);
console.log(typeof newArr);

//* slice, splice

console.log("A ", myArr);

// Create a new array with elements from the original array, starting from index 1 and ending before index 3
const myn1 = myArr.slice(1, 3);

console.log(myn1);
console.log("B ", myArr);

// Remove elements from the original array and add them to a new array
const myn2 = myArr.splice(1, 3);

console.log(myn2);
console.log("C ", myArr);

const marvelHeros = ["thor", "ironman", "spiderman"];
const dcHeros = ["superman", "flash", "batman"];

/* marvelHeros.push(dcHeros);
console.log(marvelHeros); */ // This will not give the desired result as it will add the entire dcHeros array as a single element to the end of marvelHeros

// Create a new array containing all elements from both arrays
const allHeros = marvelHeros.concat(dcHeros);
console.log(allHeros);

// Create a new array containing all elements from both arrays using the spread operator
const allNewHeros = [...marvelHeros, ...dcHeros];
console.log(allNewHeros);

const anotherArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

// Flatten the nested arrays
const useAnotherArr = anotherArr.flat(Infinity);
console.log(useAnotherArr);

console.log(Array.isArray("Mohit")); // check if a value is an array
console.log(Array.from("Mohit")); // convert a string into an array of characters
console.log(Array.from({ name: "Mohit" })); // create an array from an object with a property

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // create an array from a list of arguments
