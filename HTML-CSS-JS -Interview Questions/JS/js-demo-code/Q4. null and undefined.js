const { get } = require("mongoose");

let a;                     // a is declared but not assigned
console.log(a);            // Output: undefined

let b = null;              // b is deliberately set to "no value"
console.log(b);            // Output: null

// Example functions:
console.log("⭐ Example functions:");

function test() {}
console.log(test());     // undefined (no return statement)

function getUser() {
  return null;           // intentionally returning no user
}
console.log(getUser());  // null
