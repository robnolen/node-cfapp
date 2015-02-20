var http = require("http");

function displayapi (cb) {
   var options = { host: 'private-4f338-iceberg3.apiary-mock.com',
                   path: '/notes'};

  http.get(options, function(result) {
      var chunks = [];
      var body = "";
      
      result.on('data', function(chunk) {
          chunks.push(chunk);
      });
      
      result.on('end', function(chunk) {
          body = Buffer.concat(chunks);
          console.log(body);
          cb(JSON.parse(body));
      });
  });

}


exports.displayapi = displayapi;
