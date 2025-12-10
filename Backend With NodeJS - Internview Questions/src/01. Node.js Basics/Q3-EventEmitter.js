const EventEmitter = require("events");

// Create emitter instance
const emitter = new EventEmitter();

// Listener
emitter.on("greet", (name) => {
  console.log("Hello", name);
});

// Emit event
emitter.emit("greet", "Tanish");
