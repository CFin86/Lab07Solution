var net = require("net");

var port = process.argv[2]; 

var server = net.createServer(function listener(e) {
    //e.write(createDate()); THEN e.end(); ALSO OK
    e.end(createDate() + "\n");
});

//"YYYY-MM-DD hh:mm"
function createDate() {
    var d = new Date();
    var year = d.getFullYear();
    var month = toDblDigit(d.getMonth() + 1);
    var day = toDblDigit(d.getDate());
    var hour = toDblDigit(d.getHours());
    var minutes = toDblDigit(d.getMinutes());
    return year + "-" + month + "-" + day + " " + hour + ":" + minutes;
}

function toDblDigit(num) {
    if(num < 10) {
        num = "0" + num;
    }
    return num;
}

server.listen(port);