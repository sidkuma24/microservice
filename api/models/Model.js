'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var payloadSchema = new Schema({
	uuid:{
		type: Number,
	},
	status:{
		type: [{
			type: String,
			enum: ['processing', 'done']
		}]
	},
	file_name:{
		type: String
	},
	path:{
		type: String
	}
});

module.exports = mongoose.model('payload', payloadSchema);