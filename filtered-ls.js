var fs = require("fs");
var path = require("path");

var dirPath = process.argv[2]; //To a directory!
var ext = "." + process.argv[3]; //.MD .txt .js .html

fs.readdir(dirPath, function(err, list) {
    
    if(err) {
        console.log(err.message);
    }

    list.forEach(function(listItem, i) {
        if(path.extname(listItem) == ext) {
            console.log(listItem);
        }
    });

    // for(var i = 0; i < list.length; i++) {
    //     if(path.extname(list[i]) == ext) {
    //         console.log(list[i]);
    //     }
    // }
});