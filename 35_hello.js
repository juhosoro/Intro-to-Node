var http = require('http');
var fs = require('fs'); // filesystem module 

// accessing the file system by filesystem module

http.createServer(function (req, res) {
	fs.readFile('index.html', function(err, data) {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		res.end();
	})
}).listen(8080);