//! Loops/Iterations in Js:

// for loop
for (let index = 0; index <= 10; index++) {
   const element = index;
   console.log(element);
}

// for loop with if statement
for (let i = 0; i <= 10; i++) {
   const element = i;
   if (element == 5) {
      console.log(" We found the number five");
   }
   console.log(element);
}

// nested for loops
for (let i = 0; i <= 10; i++) {
   console.log(`Outer loop value: ${i}`);
   for (let j = 0; j <= 10; j++) {
      //console.log(`Inner loop value ${j} and inner loop ${i}`);
      console.log(`${i} * ${j} = ${i * j}`);
   }
}

// for loop with array
let myArray = ["Flash", "Batman", "Superman"];
console.log(myArray.length); // Output: 3

for (let i = 0; i < myArray.length; i++) {
   const element = myArray[i];
   console.log(element);
}

// for loop with break statement
for (let i = 1; i <= 20; i++) {
   if (i == 5) {
      console.log(`Detected ${i}`);
      break;
   }
   console.log(`Value of i is : ${i}`);
}

// for loop with continue statement
for (let i = 1; i <= 20; i++) {
   if (i == 5) {
      console.log(`Detected ${i}`);
      continue;
   }
   console.log(`Value of i is : ${i}`);
}
