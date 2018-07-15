let CompanyService = require("@services/company.service");
let BaseController = require("@controllers/base/controller");

class CompanyController extends BaseController {
	constructor() {
		super(new CompanyService);
	}
}

module.exports = CompanyController;
