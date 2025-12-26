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
