const fs = require("fs");

// simple callback
fs.readFile("data.txt", "utf-8", () => {
    console.log("Read complete");
});

console.log("Next task executed immediately");

// callback with data
fs.readFile("./data.txt", "utf-8", (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
})

console.log("Server running on http://localhost:3000");