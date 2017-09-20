var fs = require("fs");

var path = process.argv[2];

var buffer = fs.readFileSync(path);

var str = buffer.toString();

var newLines = str.split("\n").length - 1;

console.log(newLines);