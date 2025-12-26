// Primitive Data Types

let age = 22;                   // Number: numeric value
let name = "Tanish";            // String: sequence of characters
let isLoggedIn = false;         // Boolean: true/false
let score;                      // Undefined: declared but no value assigned
let data = null;                // Null: intentional empty value
let bigValue = 987654321987654321n; // BigInt: large integer using 'n'
let id = Symbol("userId");      // Symbol: unique identifier


// Non-Primitive Data Types

let student = {                 // Object: key-value pairs
  name: "Rahul",
  age: 21
};

let marks = [90, 85, 92];       // Array: ordered list of numbers

function greet() {              // Function: reusable block of logic
  console.log("Hello");
}

// Output when printed:

console.log(typeof age);        // number
console.log(typeof name);       // string
console.log(typeof isLoggedIn); // boolean
console.log(typeof score);      // undefined
console.log(typeof data);       // object  (special case in JS)
console.log(typeof bigValue);   // bigint
console.log(typeof id);         // symbol

console.log(typeof student);    // object
console.log(typeof marks);      // object (arrays are also objects)
console.log(typeof greet);      // function (special subtype of object)

// Example demonstrating reference behavior: two variables point to the same object
let a = { value: 10 };
let b = a;           // b receives reference to the same object
b.value = 20;

console.log(a.value); // 20 (both refer to same memory)
console.log(b.value); // 20 (both refer to same memory)