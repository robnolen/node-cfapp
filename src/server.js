var http   = require("http"),
    url    = require("url"),
    fs     = require("fs"),
    Router = require("router"),
    st     = require("st"),
    getApi = require("./getapi");
function start() {

    var router = Router();
    console.log(__dirname);
    var mount = st({ path: __dirname +'/static', 
                     url: '/', 
                     index: 'index.html'});

    router.get("/getapi", function(req, res) { 
        console.log("getapi");
        getApi.getapi(req, res);
    });
    
    var server = http.createServer(function(req, res) {
        router(req, res, function() { 
            mount(req, res);
        });
    });
    server.listen(process.env.VCAP_APP_PORT);
}

exports.start = start;
