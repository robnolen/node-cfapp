var http = require("http");
var url = require("url");

function start(route) {
    function onRequest(request, response) {
        console.log("Request received.");
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received");
        route(response, pathname);
    }
    
    http.createServer(onRequest).listen(process.env.VCAP_APP_PORT);
    console.log("Server startup complete");
}

exports.start = start;
