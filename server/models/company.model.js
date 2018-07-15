const BaseModel = require("@models/base/model");

module.exports = new BaseModel('company', {
	_id: {
		type: String,
		select: false
	},
	name: String,
	description: String
}).build();
