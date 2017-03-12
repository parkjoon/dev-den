var express = require('express');
var path = require('path');
var app = express();

// Define the port to run on
app.set('port', 8080);

app.use(express.static(path.join(__dirname, 'public')));

// The 404 Route (ALWAYS Keep this as the last route).
app.get('*', function(req, res){
	if (req.accepts('html')) {
		res.status(404).send('<script>location.href = "/404.html";</script>');
	}
});

// Listen for requests
var server = app.listen(app.get('port'), function() {
	var port = server.address().port;
	console.log('Magic happens on port ' + port);
});
