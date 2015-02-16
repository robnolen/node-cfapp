var fs = require("fs");
function route(pathname) {
    var file = "." + pathname;
    console.log("routing request for " + file);
    if (pathname == "/") {
        file = "./index.html";
    }
    else if (fs.existsSync(file)) {
        file = "." + pathname;
    }
    else {
        file = "./404.html";
    }
    return file;
}

exports.route = route;
