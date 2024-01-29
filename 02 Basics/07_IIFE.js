//! (IIFE) Immediately Invoked Function Expression

// named IIFE
(function chai() {
   console.log(`DB CONNECTED`);
})();

// unnamed IIFE
((name /* parameters */) => {
   console.log(`DB CONNECTED TWO ${name}`);
})("Mohit");
