//! Switch case:
//* control structure that allows for a variable to be evaluated against multiple cases, with the first matching case being executed.

//* syntax

switch (
   key // The variable to be evaluated
) {
   case value: // A specific value to compare the key against
      break; // Exit the switch statement

   default: // The default case, executed if no matching case is found
      break; // Exit the switch statement
}

// Example usage:

const month = 3; // Set the month variable to a number

switch (month) {
   case 1:
      console.log("Jan");
      break;
   case 2:
      console.log("Feb");
      break;
   case 3:
      console.log("March");
      break;
   case 4:
      console.log("April");
      break;

   default:
      console.log("default case match");
      break;
}

const Month = "March"; // Set the month variable to a string

switch (Month) {
   case "Jan":
      console.log("Jan");
      break;
   case "Fab":
      console.log("Feb");
      break;
   case "March":
      console.log("March");
      break;
   case "April":
      console.log("April");
      break;

   default:
      console.log("default case match");
      break;
}
