var fs = require("fs");

var path = process.argv[2];

fs.readFile(path, function(err, data) {
    if(err) {
        console.log(err.message);
    } else {
        var str = data.toString();
        console.log(str);
        var newLines = str.split("\n").length - 1;
        console.log(newLines);
    }
});