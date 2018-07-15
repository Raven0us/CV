let TextService = require("@services/text.service");
let BaseController = require("@controllers/base/controller");

class TextController extends BaseController {
	constructor() {
		super(new TextService);
	}
}

module.exports = TextController;
