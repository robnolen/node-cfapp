function route(pathname) {
    var file = "";
    console.log("routing request for " + pathname);
    if (pathname == "/") {
        file = "./index.html";
    }
    return file;
}

exports.route = route;
