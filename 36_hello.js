var http = require('http');
var fs = require('fs'); // filesystem module 
var portNum = 8080;

// accessing the file system by filesystem module

http.createServer(function (req, res) {
	fs.readFile('index.html', function(err, data) {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		console.log("...Incoming Request: " + req.url);
		res.end();
	})
}).listen(portNum);

console.log("Server Listening on Port " + portNum + "...")