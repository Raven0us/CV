let Token = require('@models/token.model');
let BaseService = require('@services/base/service');

class TokenService extends BaseService {
	constructor() {
		super(Token);
	}
}

/**
 * @type {TokenService}
 */
module.exports = TokenService;