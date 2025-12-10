const fs = require("fs");

// Blocking (Synchronous)
const data = fs.readFileSync("./logs/data.txt", "utf-8");
console.log(data);
console.log("This runs AFTER file read");


// Non - Blocking(Asynchronous);

fs.readFile("./logs/data.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});

console.log("This runs IMMEDIATELY");
