//! filter:
//* Returns the elements of an array that meet the condition specified in a callback function.

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1:

// const newNumbers = myNumbers.filter((num) => num > 4);
const newNumbers = myNumbers.filter((num) => {
   return num > 4;
});

console.log(newNumbers);

// 2:
const newNum = [];

myNumbers.forEach((num) => {
   if (num > 4) {
      newNum.push(num);
   }
});

console.log(newNum);

// 3:

const books = [
   { title: "Book One", genre: "Fiction", publish: 1981 },
   { title: "Book Two", genre: "Non-Fiction", publish: 1992 },
   { title: "Book Three", genre: "History", publish: 1999 },
   { title: "Book Four", genre: "Non-Fiction", publish: 1989 },
   { title: "Book Five", genre: "Science", publish: 2009 },
   { title: "Book Six", genre: "Fiction", publish: 1987 },
   { title: "Book Seven", genre: "History", publish: 1986 },
   { title: "Book Eight", genre: "Science", publish: 2011 },
   { title: "Book Nine", genre: "Non-Fiction", publish: 1981 },
   { title: "Book Ten", genre: "Fiction", public: 1983 },
];

const userBooks = books.filter((bk) => bk.genre === "History");
// const userBooks = books.filter((bk) => bk.publish >= 2000);
// const userBooks = books.filter( (bk) => bk.publish >= 1995 && bk.genre === "History");
console.log(userBooks);
