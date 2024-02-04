//! for-each:

const coding = ["js", "ruby", "cpp", "java", "python"];

// Use the forEach method to loop through each item in the array and print a message to the console
coding.forEach(function (item) {
   console.log("I can code in " + item);
});

// Use an arrow function
coding.forEach((item) => {
   console.log("I can code in " + item);
});

// Define a function that takes an item as a parameter and prints
function printMe(item) {
   console.log(item);
}
coding.forEach(printMe);

// forEach method along with its index and the entire array
coding.forEach((item, index, arr) => {
   console.log(item, index, arr);
});

// array of objects
const myCoding = [
   {
      languageName: "javascript",
      languageFileName: "js",
   },
   {
      languageName: "java",
      languageFileName: "java",
   },
   {
      languageName: "python",
      languageFileName: "py",
   },
];

myCoding.forEach((item) => {
   console.log(item.languageName);
});
