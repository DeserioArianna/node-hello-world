console.log("Hello World");
console.log("Hello Boolean")
const argv = process.argv.slice(2);
const word = argv[0] || "World";
console.log(`Hello ${word}`);