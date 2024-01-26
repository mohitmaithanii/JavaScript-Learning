//* Objects destructuring and JSON API:
// Object destructuring is a way to extract properties from an object and assign them to variables.

const course = {
   coursename: "js in hindi",
   price: "999",
   courseInstructor: "hitesh",
};

const { courseInstructor: instructor } = course;

console.log(instructor); // hitesh

//* JSON API:
// JSON API is a specification for representing resources as JSON objects.
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
