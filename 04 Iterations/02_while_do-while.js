//! While loop:

let index = 0; // initialize
while (index <= 10) {
   // loop while index is less than or equal to
   console.log(`value of index is ${index}`);
   index++; // increment index by 1
}

let myArray = ["Flash", "Batman", "Superman"]; // initialize an array of superheroes

let arr = 0;
while (arr < myArray.length) {
   console.log(`Value is ${myArray[arr]}`); // print the value of the current element in the array
   arr++; // increment arr by 1
}

//! do-while loop:

let score = 1; // initialize
do {
   // execute the block of code once, then check the condition
   console.log(`Score is  ${score}`);
   score++; // increment score by 1
} while (score <= 10); // continue looping while score is less than or equal to 10
