//* Objects destructuring and JSON API

const course = {
   coursename: "js in hindi",
   price: "999",
   courseInstructor: "hitesh",
};

const { courseInstructor: instructor } = course;

console.log(instructor); // hitesh

//* JSON API

/* 
{
   "name": "Mohit",
   "course": "js in hindi",
   "price": "free",
}

[
   {}, 
   {}, 
   {},
]; 
*/
