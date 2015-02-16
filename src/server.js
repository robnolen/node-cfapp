var http = require("http");
var url = require("url");
var fs = require("fs");

function start(route) {
    function onRequest(request, response) {
        console.log("Request received.");
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received");
        var fileName = route(pathname);
        console.log(fileName);
        if(fileName != "") {
           fs.createReadStream(fileName).pipe(response);
        }
        else {
            response.writeHeader(404, {"Content-Type":"text/html"});
            response.write("<h1>404 not found</h1>");
            response.end();
        }
    }
    
    http.createServer(onRequest).listen(process.env.VCAP_APP_PORT);
    console.log("Server startup complete");
}

exports.start = start;
