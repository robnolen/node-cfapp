var jade = require('jade');
var displayApi = require('./displayapi');
exports.testjade = function (req, res) {
    var jade_opts = {"pretty" : true, "debug" : true};
    var jadeTemplate = __dirname + "/templates/test.jade";
    
    displayApi.displayapi(function (ret) { 
        var fn = jade.compileFile(jadeTemplate, jade_opts);
        var html = fn({"notes" : ret });
        res.writeHead(200, {"Content-Type" : "text/html" });
        res.write(html);
        res.end();
    });
}
