let Company = require('@models/company.model');
let BaseService = require('@services/base/service');

class CompanyService extends BaseService {
	constructor() {
		super(Company);
	}
}

module.exports = CompanyService;