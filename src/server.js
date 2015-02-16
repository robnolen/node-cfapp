var http   = require("http"),
    url    = require("url"),
    fs     = require("fs"),
    Router = require("router"),
    st     = require("st")

function start() {

    var router = Router();
    router.get('/', function(req, res) {
        var mount = st({ 
                        path: './src/static', 
                        url: '/', 
                        index: 'index.html' 
        });
        mount(req, res);
    });

    var server = http.createServer(function(req, res) {
        router(req, res, function() {});
    });
    server.listen(process.env.VCAP_APP_PORT);

    
}

exports.start = start;
