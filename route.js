var fs = require("fs");

function route(response, pathname) {
    console.log("routing request for " + pathname);
    response.writeHead(200, {"Content-Type" : "text/plain"});
    if (pathname == "/") {
        fs.createReadStream('./index.html').pipe(response);
    }
    else{
        response.write("no path");
    }
    response.end();
}

exports.route = route;
