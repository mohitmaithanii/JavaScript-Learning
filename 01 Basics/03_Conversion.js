//! Conversion Operations in JavaScript:
//* conversion operations are used to change the data type of a value. This can be useful for a variety of purposes, such as performing calculations, comparing values, and storing data in a consistent format.

//* Converting a string to a number
let number = "33";
console.log(typeof number); //string

let valueInNumber = Number(number);
console.log(typeof valueInNumber); // number
console.log(valueInNumber); // Output: 33

//* Convert a string to a number
let someNumber = "32abc";
console.log(typeof someNumber); // string

let numberInString = Number(someNumber);
console.log(typeof numberInString); // number
console.log(numberInString); // Output: NaN (Not a Number)

//* Converting null to a number
let scoreNull = null;
console.log(typeof scoreNull); // object

let nullNumber = Number(scoreNull);
console.log(typeof nullNumber); // number
console.log(nullNumber); // Output: 0

//* Converting undefined to a number
let undef = undefined;
console.log(typeof undef); // undefined

let undefNumber = Number(undef);
console.log(typeof undefNumber); // number
console.log(undefNumber); // Output: NaN (Not a Number)

//* Converting a boolean to a number
let bool = true;
console.log(typeof bool); // boolean

let boolNumber = Number(bool);
console.log(typeof boolNumber); // number
console.log(boolNumber); // Output: 1

//* Convert a string to a number
let string = "mohit";
console.log(typeof string); // string

let stringNumber = Number(string);
console.log(typeof stringNumber); // number
console.log(stringNumber); // Output: NaN (Not a Number)

//* Converting a number to a boolean
let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(typeof booleanIsLoggedIn); // boolean
console.log(booleanIsLoggedIn); // Output: true

//* Converting a string to a boolean
let isStringLoggedIn = "mohit";

let booleanIsString = Boolean(isStringLoggedIn);
console.log(typeof booleanIsString); // boolean
console.log(booleanIsString); // Output: true

//* Converting a number to a string
let num = 33;

let stringNum = String(num);
console.log(typeof stringNum); // string
console.log(stringNum); // Output: "33"
