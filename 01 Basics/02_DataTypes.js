//! Data Types in JavaScript
//* data types specify the type of value that a variable can hold.

//* Primitive data types

// 1 - Number: The Number data type represents numeric values. It can be an integer or a floating-point number.
let age = 42;
console.log(typeof age); // number

// 2 - BigInt: The BigInt data type represents integers that are too large to be represented by the Number data type.
const bigNum = BigInt(1000000000000);
console.log(typeof bigNum); // bigint

// 3 - String: The String data type represents a sequence of characters.
let name = "mohit";
console.log(typeof name); // string

// 4 - Boolean: The Boolean data type represents true or false values.
let isDone = false;
console.log(typeof isDone); // boolean

// 5 - Symbol: The Symbol data type represents a unique value that can be used as a property key.
let uniqueId = Symbol("Unique ID");
console.log(typeof uniqueId); // symbol

// 6 - Null: The Null data type represents the intentional absence of a value.
let nothing = null;
console.log(typeof nothing); // object (this is a bug in JavaScript)

// 7 - Undefined: The Undefined data type represents the absence of a value due to a variable not being assigned a value.
let x;
console.log(typeof x); // undefined

//* Non-primitive data type
// 7 - Objects: Objects are collections of properties, each property consisting of a property name and a reference to some value, known as the property value.
