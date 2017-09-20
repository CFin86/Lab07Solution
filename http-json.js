var http = require("http");
var url = require("url");

var port = process.argv[2];

var server = http.createServer(function(req, res) {
    var parsedUrl = url.parse(req.url, true);
    var iso = parsedUrl.query.iso;

    var dataToSend;

//THIS IS A THING v
    // switch(req.method) {
    //     case "GET":
    //         doGetStuff();
    //         break;
    //     case "POST":
    //         doPostStuff();
    //         break;
    // }

    if(req.method == "GET") {
        if(parsedUrl.pathname == "/api/parsetime") {
            dataToSend = parseTime(iso);
        } else if(parsedUrl.pathname == "/api/unixtime") {
            dataToSend = unixTime(iso);
        }
        res.writeHead(200, {"Content-Type": "application/json"});
        // res.write(dataToSend);
        res.end(dataToSend);
    } 
});

function parseTime(iso) {
    var d = new Date(iso);
    var time = {
        hour: d.getHours(),
        minute: d.getMinutes(),
        second: d.getSeconds()
    };
    return JSON.stringify(time);
}

function unixTime(iso) {
    var d = new Date(iso);
    var time = {
        unixtime: d.getTime()
    };
    return JSON.stringify(time);
}

server. listen(port);