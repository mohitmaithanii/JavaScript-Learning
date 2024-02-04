//! reduce:

/*
reduce(
    (accumulator, currentValue) => accumulator + currentValue, initialValue
    )
    */

// The reduce method takes two arguments: a reducer function and an optional initial value.

// The reducer function takes two arguments: an accumulator and the current value.

// The initial value is the value to use as the first accumulator value. If no initial value is supplied, the first element in the array will be used as the initial accumulator value and the reduction will begin from the next element.

const myNumbers = [1, 2, 3, 4];

const myTotal = myNumbers.reduce(function (acc, curVal) {
   console.log(`acc: ${acc} and curVal: ${curVal}`);
   return acc + curVal;
}, 0);

// arrow function as the reducer function.
// const myTotal = myNumbers.reduce((acc, curVal) => acc + curVal, 0);

console.log(myTotal);

// Shopping Cart method:

const shoppingCart = [
   {
      itemName: "js course",
      price: 2999,
   },
   {
      itemName: "python course",
      price: 999,
   },
   {
      itemName: "mobile dev course",
      price: 5999,
   },
   {
      itemName: "data science course",
      price: 12999,
   },
];

const totalPrice = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(totalPrice);
