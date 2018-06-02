var express = require('express'),
	app = express(),
	port = process.env.PORT || 3000,
	mongoose = require('mongoose')
	payload = require('./api/models/Model')
	bodyParser = require('body-parser');

	mongoose.Promise = global.Promise;
	mongoose.connect('mongodb://localhost/PayloadDB');

	app.use(bodyParser.urlencoded({entended: true}));
	app.use(bodyParser.json());

	var routes = require('./api/routes/Routes')
	routes(app);

app.listen(port);

console.log('Microservice server started on port: ' + port);