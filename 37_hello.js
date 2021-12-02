var http = require('http');
var fs = require('fs'); // filesystem module 
var url = require('url');
var portNum = 8080;

// accessing the file system by filesystem module

http.createServer(function (req, res) {
	var q = url.parse(req.url, true); // parsing requested url using url module
	var filename = "." + q.pathname;
	console.log(filename);
	fs.readFile(filename, function(err, data) {
		// raising an error because required by function
		if (err) {
			res.writeHead(404, {'Content-Type': 'text/html'}); // 404 = object not found
			return res.end("404 Not Found");	// end the program
		}

		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		return res.end();
	})
}).listen(portNum);

console.log("Server Listening on Port " + portNum + "...");