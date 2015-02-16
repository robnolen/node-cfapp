var http = require("http");
var https = require("https");

exports.getapi = function(req, res) {
    var options = { host: 'private-4f338-iceberg3.apiary-mock.com',
                    path: '/notes'};

    http.get (options, function(result) {
        console.log("Status: " + result.statusCode);
        console.log("Headers: " + JSON.stringify(result.headers));

        var bodyChunks = [];
        result.on('data', function(chunk) {
            bodyChunks.push(chunk);
        }).on('end', function() {
            var body = Buffer.concat(bodyChunks);
            res.writeHead(200,{"Content-Type" : "text/html"});
            res.write(body);
        });
    });
}

