const BaseModel = require("@models/base/model");

module.exports = new BaseModel('text', {
	_id: {
		type: String,
		select: false
	},
	category: String,
	key: String,
	value: String,
}).build();
