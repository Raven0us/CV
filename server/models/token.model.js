const BaseModel = require("@models/base/model");

module.exports = new BaseModel('token', {
	_id: {
		type: String,
		select: false
	},
	email: String,
	value: String,
	created_at: String
}).build();
