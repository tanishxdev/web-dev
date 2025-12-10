# JS Interview Questions

---

## Q1. What is JavaScript?

---

### 1. Concept

JavaScript is a **high-level, dynamically typed, interpreted programming language** used to add **behavior and interactivity** to web pages.
It runs in the **browser** and also on the **server** using environments like **Node.js**.

In a web application:

| Layer | Language Example | Purpose                 |
| ----- | ---------------- | ----------------------- |
| HTML  | Structure        | Page content            |
| CSS   | Styling          | Look and feel           |
| JS    | Behavior         | Logic and interactivity |

JavaScript follows the **ECMAScript** standard and supports:

* Object-Oriented Programming
* Functional Programming
* Event-driven programming
* Asynchronous programming (Promises, async/await)

---

### 2. Why was JavaScript created?

It was created to make websites **interactive**. Earlier, pages were static and could not:

* validate user input
* respond to user actions
* update content without refreshing the page

JavaScript enables such interactive behavior.

---

### 3. Key Features (Short Points)

| Feature             | Description                                            |
| ------------------- | ------------------------------------------------------ |
| Interpreted         | Runs line-by-line without compilation                  |
| Dynamically Typed   | Variable types are decided at runtime                  |
| Prototype-based OOP | Uses prototypes instead of classical classes           |
| Single-threaded     | Executes one task at a time (event loop handles async) |
| Cross-platform      | Works in browsers and Node.js                          |

---

### 4. Example Code with Explanation

```javascript
// A simple JavaScript example

// 1. Variable declaration
let name = "Tanish";              // String data stored in variable 'name'

// 2. Function definition
function greet(user) {            // Function that accepts one argument
  return "Hello, " + user;        // Returns a greeting message
}

// 3. Function call
let message = greet(name);        // 'greet' is called with 'Tanish'
console.log(message);             // Output: Hello, Tanish
```

Explanation (line-by-line):

1. A variable `name` is created and stores text.
2. A function `greet()` is defined, which takes a name and returns a greeting.
3. The function is called and result is stored in `message`.
4. `console.log` prints the output.

Expected Output:

```
Hello, Tanish
```

---

### 5. Where does JavaScript run?

JavaScript can run in:

| Environment | Example Tools           |
| ----------- | ----------------------- |
| Browser     | Chrome, Firefox, Safari |
| Server      | Node.js                 |
| Desktop     | Electron apps           |
| Mobile      | React Native            |
| Database    | MongoDB functions       |

---

### 6. What can JavaScript do?

JavaScript is used for:

1. Web Interactivity
2. Form Validation
3. Animations and Effects
4. Fetching API data
5. Single Page Applications (React, Vue, Angular)
6. Backend services (Node.js, Express)
7. Realtime apps (Chat, Games)

---

### 7. Notes

| Key Point                | Explanation                      |
| ------------------------ | -------------------------------- |
| Standard name            | ECMAScript                       |
| JS is not Java           | They are different languages     |
| JS is async-capable      | Promises, callbacks, async/await |
| JS executes in V8 engine | Chrome and Node.js use V8        |

---

### 8. Interview-Ready Summary

JavaScript is a **high-level, dynamically typed, single-threaded, interpreted programming language** used to create **interactive and dynamic web applications**. It runs in the browser and on the server using **Node.js**. It supports **object-oriented, functional, and asynchronous programming**, making it one of the most important languages in modern software development.

---

### 9. Quick Practice Interview Questions

1. What is JavaScript and why is it used?
2. Is JavaScript compiled or interpreted?
3. Why is JavaScript called dynamically typed?
4. What is Node.js and how does it relate to JavaScript?
5. Difference between Java and JavaScript.
6. What is the V8 engine?
7. What is the ECMAScript standard?

---

## Q2. What are the Data Types in JavaScript?

---

### 1. Concept

A **data type** represents the **kind of value** stored in a variable.
JavaScript decides the type **at runtime**, so it is a **dynamically typed language**.

JavaScript has **two main categories** of data types:

1. **Primitive Data Types**
2. **Non-Primitive (Reference) Data Types**

---

### 2. Primitive Data Types (7 types)

Primitive values are:

* immutable (cannot be changed directly)
* stored directly in memory
* compared by value

| Primitive Type | Description                             |
| -------------- | --------------------------------------- |
| Number         | Numeric values (integer, float)         |
| String         | Text values inside quotes               |
| Boolean        | true or false                           |
| Undefined      | Declared but not assigned value         |
| Null           | Intentional empty value                 |
| BigInt         | Very large integers (end with n)        |
| Symbol         | Unique value, often used as object keys |

---

### 3. Non-Primitive (Reference) Data Types

These store **references (memory addresses)** instead of actual values.

| Non-Primitive Type | Description                             |
| ------------------ | --------------------------------------- |
| Object             | Key-value pairs                         |
| Array              | Ordered list (built on objects)         |
| Function           | Reusable block of code (also an object) |

---

### 4. Code Example (with line-by-line explanation)

```javascript
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
```

### Output when printed:

```javascript
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
```

---

### 5. Important Notes

| Key Point                        | Explanation                               |
| -------------------------------- | ----------------------------------------- |
| JavaScript is dynamically typed  | Variable types are decided at runtime     |
| `typeof null` is `"object"`      | Known historical behavior in JS           |
| Arrays and functions are objects | typeof returns `"object"` or `"function"` |
| Primitive values are immutable   | They cannot be changed directly           |
| Objects store references         | Two identical objects are never equal     |

Example demonstrating reference behavior:

```javascript
let a = { value: 10 };
let b = a;           // b receives reference to the same object
b.value = 20;

console.log(a.value); // 20 (both refer to same memory)
```

---

### 6. Quick Comparison

| Primitive (Value)           | Reference (Address)            |
| --------------------------- | ------------------------------ |
| Stored directly in variable | Variable holds memory location |
| Compared by value           | Compared by reference          |
| Fast, fixed size            | Complex, dynamic size          |

---

### 7. Interview-Ready Summary

JavaScript has **7 primitive data types** (number, string, boolean, undefined, null, bigint, symbol) and **reference types** like objects, arrays, and functions.
Primitive values store actual data, while reference types store **memory addresses**.
JavaScript is **dynamically typed**, meaning a variable’s type is decided at runtime.

---

### 8. Practice Interview Questions

1. How many data types are there in JavaScript?
2. Difference between primitive and non-primitive data types.
3. Why does `typeof null` return `"object"`?
4. Is an array a data type in JavaScript?
5. Difference: `undefined` vs `null`.
6. What is Symbol and where is it used?
7. What problem does BigInt solve?

---

## Q3. What is the difference between `==` and `===` in JavaScript?

---

### 1. Concept

JavaScript provides two equality comparison operators:

| Operator | Name            | Behavior                                                          |
| -------- | --------------- | ----------------------------------------------------------------- |
| `==`     | Loose Equality  | Compares values after type conversion                             |
| `===`    | Strict Equality | Compares values without type conversion (type + value must match) |

Key point:
`==` performs **type coercion**, while `===` does **not**.

---

### 2. Type Coercion Meaning

Type coercion means JavaScript **automatically converts data types** before comparison.

Example:

* `"5"` becomes number `5` when using `==`
* but stays a string when using `===`

---

### 3. Example Code (with line-by-line explanation)

```javascript
console.log(5 == "5");     // true
// "5" (string) is converted to 5 (number), values match.

console.log(5 === "5");    // false
// No type conversion. Number 5 is not the same type as string "5".


console.log(0 == false);   // true
// false is converted to 0, both become equal.

console.log(0 === false);  // false
// Different types: number vs boolean.


console.log(null == undefined);  // true
// Special rule: null loosely equals undefined.

console.log(null === undefined); // false
// Strict comparison: different types.
```

---

### 4. Output

```
true
false
true
false
true
false
```

---

### 5. Summary Table

| Comparison             | `==` Result | `===` Result                        |
| ---------------------- | ----------- | ----------------------------------- |
| `5` and `"5"`          | true        | false                               |
| `0` and `false`        | true        | false                               |
| `null` and `undefined` | true        | false                               |
| `1` and `true`         | true        | false                               |
| `[]` and `""`          | true        | false                               |
| `{}` and `{}`          | false       | false (different memory references) |

---

### 6. Recommended Best Practice

In modern JavaScript development:

Use **`===` (strict equality)** by default for cleaner and more predictable logic.

`==` is only used when you intentionally want type coercion, which is rare and risky.

---

### 7. Interview-Ready Summary

`==` compares values **after type conversion** (loose equality), while `===` compares **both value and data type** without conversion (strict equality).
To avoid unexpected results, use **strict equality (`===`)** in most cases.

---

### 8. Mini Trick to Remember

```
==  checks value only
=== checks value + type
```

---

### 9. Practice Interview Questions

1. Why is `5 == "5"` true?
2. Why is `0 == false` true but `0 === false` false?
3. What is type coercion in JavaScript?
4. Why should strict equality `===` be preferred in most cases?
5. What will be the output: `null == undefined` and `null === undefined`?
6. Is `{ } === { }` true or false? Why?

---

## Q4. What is the difference between `null` and `undefined` in JavaScript?

---

### 1. Concept

Both `null` and `undefined` represent **absence of value**, but they are not the same.

| Value       | Meaning                                             |
| ----------- | --------------------------------------------------- |
| `undefined` | A variable is declared but not assigned any value   |
| `null`      | A variable is intentionally assigned an empty value |

---

### 2. Key Differences

| Feature       | `undefined`                              | `null`                         |
| ------------- | ---------------------------------------- | ------------------------------ |
| Type          | `undefined`                              | `object` (special JS behavior) |
| Assigned by   | JavaScript engine                        | Programmer                     |
| Represents    | Value not assigned                       | Intentional empty value        |
| Common Usage  | Default state of uninitialized variables | Reset or clear a value         |
| typeof result | `undefined`                              | `object`                       |

---

### 3. Example Code (with line-by-line explanation)

```javascript
let a;                     // a is declared but not assigned
console.log(a);            // Output: undefined

let b = null;              // b is deliberately set to "no value"
console.log(b);            // Output: null
```

More comparisons:

```javascript
console.log(undefined == null);   // true
// Loose equality: considered equal in value

console.log(undefined === null);  // false
// Strict equality: different types
```

---

### 4. Output

```
undefined
null
true
false
```

---

### 5. Detailed Behavior Comparison

| Scenario                   | Example                                                   | Explanation           |
| -------------------------- | --------------------------------------------------------- | --------------------- |
| Variable not assigned      | `let x;` then `console.log(x)`                            | Result is `undefined` |
| Function missing return    | Function without return automatically returns `undefined` |                       |
| Missing function argument  | In `sum(5)`, second argument is `undefined`               |                       |
| Intentional empty return   | `return null` indicates empty result by design            |                       |
| Clearing object properties | `user.token = null` means no token exists                 |                       |

Example functions:

```javascript
function test() {}
console.log(test());     // undefined (no return statement)

function getUser() {
  return null;           // intentionally returning no user
}
console.log(getUser());  // null
```

---

### 6. Quick Comparison Table

| Comparison           | Result                      |
| -------------------- | --------------------------- |
| `undefined == null`  | true                        |
| `undefined === null` | false                       |
| typeof undefined     | "undefined"                 |
| typeof null          | "object" (historical quirk) |

---

### 7. Interview-Ready Summary

`undefined` means a variable was **declared but not assigned** any value, while `null` means a variable was **intentionally assigned an empty value**.
`undefined == null` is true due to loose equality, but `undefined === null` is false because they have different types.

---

### 8. Practice Interview Questions

1. What is the difference between `null` and `undefined`?
2. Why does `typeof null` return `"object"`?
3. What will be the output of `undefined == null` and `undefined === null`?
4. When should we use `null` in real applications?
5. What does a function return if it has no return statement?
6. What happens when you call a function without all expected arguments?

---

## Q5. Explain the concept of Hoisting in JavaScript.

---

### 1. Concept

Hoisting is JavaScript’s **default behavior of moving variable and function declarations to the top of their scope** (global or function scope) **before code execution**.

This means you can **use variables and functions before they are declared** (with specific rules).

Important:
Only **declarations** are hoisted, not **initializations** (assignments).

---

### 2. How JavaScript Executes Code (Short Explanation)

JavaScript execution happens in two phases:

| Phase              | Description                                                                |
| ------------------ | -------------------------------------------------------------------------- |
| 1) Creation Phase  | Memory is allocated for variables and functions. Declarations are hoisted. |
| 2) Execution Phase | Code runs line-by-line. Assignments happen here.                           |

---

### 3. Hoisting Behavior Differences

| Keyword / Type       | Hoisted?           | Initial Value During Hoisting |
| -------------------- | ------------------ | ----------------------------- |
| var                  | Yes                | undefined                     |
| let                  | Yes                | not initialized (TDZ)         |
| const                | Yes                | not initialized (TDZ)         |
| function declaration | Yes                | Full function available       |
| function expression  | Only variable part | undefined                     |
| arrow function       | Only variable part | undefined                     |

TDZ = Temporal Dead Zone (cannot access before actual line of declaration)

---

### 4. Code Example: var Hoisting

```javascript
console.log(a);   // undefined (not error)
var a = 10;
console.log(a);   // 10
```

Explanation:

Behind the scenes JavaScript treats it like:

```javascript
var a;            // hoisted with initial value undefined
console.log(a);   // undefined
a = 10;           // assignment (not hoisted)
console.log(a);   // 10
```

---

### 5. Code Example: let and const Hoisting (TDZ)

```javascript
console.log(x);   // ReferenceError: Cannot access 'x' before initialization
let x = 5;

console.log(y);   // ReferenceError: Cannot access 'y' before initialization
const y = 20;
```

Explanation:

Memory is reserved during creation phase, but variables stay in **Temporal Dead Zone** until JavaScript reaches the actual declaration line.

---

### 6. Function Declaration Hoisting

```javascript
greet();  // works

function greet() {
  console.log("Hello");
}
```

Because the entire function is hoisted.

---

### 7. Function Expression / Arrow Function Hoisting

```javascript
sayHi();    // TypeError: sayHi is not a function
var sayHi = function() {
  console.log("Hi");
};
```

Reason: `var sayHi` is hoisted as `undefined`, but assignment happens later.

---

### 8. Summary Table

| Entity                               | Can be used before declaration? | Why?                          |
| ------------------------------------ | ------------------------------- | ----------------------------- |
| var                                  | Yes, gives undefined            | Declaration hoisted           |
| let / const                          | No (TDZ error)                  | Hoisted but not initialized   |
| function declaration                 | Yes                             | Full function hoisted         |
| function expression / arrow function | No                              | Variable hoisted as undefined |

---

### 9. Interview-Ready Summary

Hoisting is JavaScript’s process of **moving declarations to the top of their scope before execution**.
`var` is hoisted with a default value of `undefined`, while `let` and `const` are hoisted but remain uninitialized in the **Temporal Dead Zone**, causing an error if accessed early.
Function declarations are fully hoisted, but function expressions and arrow functions behave like variables and are not callable before assignment.

---

### 10. Practice Interview Questions

1. What is hoisting in JavaScript?
2. Does hoisting apply to both declarations and initializations?
3. Why does `var` return `undefined` but `let` throws an error before initialization?
4. What is the Temporal Dead Zone (TDZ)?
5. Are function declarations hoisted?
6. Why is `typeof sayHello` undefined for function expressions before initialization?
7. Explain hoisting behavior with example code.

---
