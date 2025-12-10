// var Hoisting

console.log(a); // undefined
var a = 10;
console.log(a); // 10

// let and const Hoisting (TDZ)

console.log(x);   // ReferenceError: Cannot access 'x' before initialization
let x = 5;

console.log(y);   // ReferenceError: Cannot access 'y' before initialization
const y = 20;


// Function Declaration Hoisting

greet(); // works

function greet() {
    console.log("Hi");
}

// Function Expression / Arrow Function Hoisting

sayHi();    // TypeError: sayHi is not a function
var sayHi = function() {
  console.log("Hi");
};
