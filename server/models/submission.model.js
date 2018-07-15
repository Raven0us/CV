let BaseModel = require("@models/base/model");

module.exports = new BaseModel('submission', {
	email: String,
	body: String,
}).build();
