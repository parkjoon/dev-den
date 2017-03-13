require('dotenv').config();
var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var mg = require('nodemailer-mailgun-transport');

// Define the port to run on
app.set('port', 8080);

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// The 404 Route (ALWAYS Keep this as the last route).
app.get('*', function(req, res){
	if (req.accepts('html')) {
		res.status(404).send('<script>location.href = "/404.html";</script>');
	}
});

app.post('/sayHello', function(req, res) {
	var name = req.body.name;
	var phone = req.body.phone || '<Not Specified>';
	var email = req.body.email;
	var message = req.body.message;

	// Create transporter object capable of sending email using the default SMTP transport.
	var transporter = nodemailer.createTransport(mg({
		auth: {
			api_key: process.env.MAILGUN_API_KEY,
			domain: process.env.MAILGUN_DOMAIN
		}
	}));

	// Setup e-mail data with unicode symbols.
	var mailOptions = {
		from: '"' + name + '" <' + email + '>',
		to: process.env.CONTACT_EMAIL,
		subject: 'Contact Form Message',
		text: 'Name: ' + name + '\nPhone: ' + phone + '\nEmail: ' + email + '\n\nMessage: ' + message
	};

	// Send mail with defined transport object.
	transporter.sendMail(mailOptions, function(error, info) {
		if(error) {
			console.log('\nCONTACT FORM ERROR: ' + error + '\n');
		}
		else {
			console.log('\nCONTACT FORM RESPONSE SENT: ' + JSON.stringify(info) + '\n');
		}
	});
});

// Listen for requests
var server = app.listen(app.get('port'), function() {
	var port = server.address().port;
	console.log('Magic happens on port ' + port);
});
