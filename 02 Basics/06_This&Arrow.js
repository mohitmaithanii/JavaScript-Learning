//! This keyword:

const user = {
   // 'this' keyword in an object refers to the object itself

   username: "Mohit",
   id: 1222,

   welcomeMessage: function () {
      console.log(`${this.username}, welcome to website`);
      console.log(this);
      // { username: 'Mohit', id: 1222, welcomeMessage: [Function: welcomeMessage] }
   },
};

user.welcomeMessage(); // Mohit, welcome to website

// Change the value of the username "Current context"
user.username = "Amit";
user.welcomeMessage(); // Amit, welcome to website

// 'this' keyword in the global context
console.log(this); // {}

function chai() {
   console.log(this.username);
}
//'this' keyword refers to the global object, which doesn't have a username property
chai(); // undefined

const chai = function () {
   console.log(this.username);
};
chai(); // undefined

//! Arrow function:

// Arrow functions do not bind their own 'this' value
// It retains the 'this' value of the enclosing context

const chai = () => {
   let username = "Mohit";
   console.log(this.username);
};

chai(); // undefined (since 'this' refers to the global object)

//* Explicit return
const addOne = (num1, num2) => {
   return num1 + num2;
};

//* Implicit return
const addTwo = (num1, num2) => num1 + num2;

//* Object return
const addThree = (num1, num2) => ({ username: "Mohit" });

console.log(addTwo(2, 3)); //5
