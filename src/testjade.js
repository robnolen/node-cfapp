var jade = require('jade');

exports.testjade = function (req, res) {
    var jadeTemplate = __dirname + "/templates/test.jade";
    var notes = [{ "id": 1, "title": "Jogging in park" }, { "id": 2, "title": "Pick-up posters from post-office" }];
    var fn = jade.compileFile(jadeTemplate, {});
    var html = fn(notes);
    console.log("heh");
    res.writeHead(200, {"Content-Type" : "text/html" });
    res.write(html);
    res.end();
    }
