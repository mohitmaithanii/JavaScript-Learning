//! Creating a new date object in JavaScript

let myDate = new Date();
console.log(typeof myDate); // Checking the data type of the date object

// Converting the date object to a string
console.log(myDate.toString());
console.log(myDate.toDateString()); // Converting the date object to a more readable format
console.log(myDate.toLocaleString()); // Converting the date object to a string using the current locale
console.log(myDate.toLocaleDateString()); // Converting the date object to a string using the current locale, only including the date

// Creating a new date object with a specific date
let myCreateDate = new Date(2023, 0, 23); // Month is 0-indexed, so January is 0
// Let's add some time to the date
// let myCreateDate = new Date(2023, 0, 23, 5, 3);

// Converting the date object to a string using the current locale
console.log(myCreateDate.toLocaleString());

// Getting the current timestamp
let myTimeStamp = Date.now();

console.log(myTimeStamp); // Printing the timestamp
console.log(myCreateDate.getTime()); // Getting the timestamp of the specific date
console.log(Math.floor(Date.now() / 1000)); // Getting the current timestamp in seconds

// Creating a new date object with the current date and time
let newDate = new Date();
console.log(newDate);

// Getting the day of the week (0-6, where 0 is Sunday)
console.log(newDate.getDay());

// Getting the month (0-11, where 0 is January)
console.log(newDate.getMonth());

// Getting the year
console.log(newDate.getFullYear());

// Converting the date object to a string using the current locale, including the long weekday name
newDate.toLocaleString("default", {
   weekday: "long",
});
