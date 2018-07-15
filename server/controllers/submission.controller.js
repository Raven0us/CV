let SubmissionService = require("@services/submission.service");
let BaseController = require("@controllers/base/controller");

class SubmissionController extends BaseController {
	constructor() {
		super(new SubmissionService);
	}
}

module.exports = SubmissionController;
