
exports.run = function() {

	var http = require('http');

	var persianize = require('./persianize');

	var server = http.createServer(function(req, res) {

	  res.writeHead(200);

	  res.end( 

	  	'persian number: ' + persianize.validator().number()

		);

	});

	server.listen(8000);

}