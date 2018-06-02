'use strict'

module.exports = function(app){
	var payload = require('../controllers/Controller');

	app.route('/report/generate')
	.post(payload.generateResponse);


}