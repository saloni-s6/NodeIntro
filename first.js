const os = require("os");

const path = require("path");

const {add , multiply} = require("./math");
const { log } = require("console");

//  Global variables

console.log(__dirname) // workspaces/NodeIntro
console.log(__filename); // /workspaces/NodeIntro/first.js
console.log(process.env);

// Commonjs module

// every file is module

console.log(add(2, 3));

// od module
console.log(os.arch());
console.log(os.type());
console.log(os.cpus());
console.log(os.machine());
console.log(os.totalmem());
console.log(os.freemem());
console.log(path.join(__dirname, "apps", "myapp"));
console.log(path.parse(__filename));