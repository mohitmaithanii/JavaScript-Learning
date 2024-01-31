//! Truthy and Falsy value:

// A truthy value is a value that is considered true when evaluated in a boolean context.
//* truthy value: true, "0", "false", " ", [], [0], [""], {}, function(){}^

// A falsy value is a value that is considered false when evaluated in a boolean context.
//* falsy value: false, 0, -0, bigInt(0n), "", null, undefined, NaN

const userEmail = "Mohit@gmail"; // A truthy value
// const userEmail = ""; // A falsy value

if (userEmail) {
   console.log("Got user email");
} else {
   console.log("Don't have user email");
}

// Check if the userEmail string is empty
if (userEmail.length === 0) {
   console.log("Array is empty");
}

const emptyObj = {};

// Check if the emptyObj object is empty
if (Object.keys(emptyObj).length) {
   console.log("Object is empty");
}
