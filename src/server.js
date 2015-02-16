var http   = require("http"),
    url    = require("url"),
    fs     = require("fs"),
    Router = require("router"),
    st     = require("st")

function start() {

    var router = Router();
    var mount = st({ path: __dirname +'/static',
                     url: '/',
                     index: 'index.html'});

    router.get('/', function(req, res) {
        mount(req, res);
    });

    var server = http.createServer(function(req, res) {
        router(req, res, function() {});
    });
    server.listen(process.env.VCAP_APP_PORT);

    
}

exports.start = start;
