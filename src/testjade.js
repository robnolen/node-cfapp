var jade = require('jade');

exports.testjade = function (req, res) {
    var jadeTemplate = "templates/test.jade";
    var fn = jade.renderFile(jadeTemplate, {});
    console.log("heh");
    res.writeHead(200, {"Content-Type" : "text/html" });
    res.write("fuck");
    res.end();
    }
