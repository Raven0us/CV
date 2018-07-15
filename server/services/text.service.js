let Text = require('@models/text.model');
let BaseService = require('@services/base/service');

class TextService extends BaseService {
	constructor() {
		super(Text);
	}
}

/**
 * @type {TextService}
 */
module.exports = TextService;