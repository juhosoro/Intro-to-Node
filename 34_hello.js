var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	var q = url.parse(req.url, true).query; // from url-module, parse url-string and assign it to variable q
	var dates = q.year + " + " + q.month; // assigning year from q string to variable dates
	res.write(dates); 
	res.end();
}).listen(8080);