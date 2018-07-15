let Submission = require('@models/submission.model');
let BaseService = require('@services/base/service');

class SubmissionService extends BaseService {
	constructor() {
		super(Submission);
	}
}

/**
 * @type {SubmissionService}
 */
module.exports = SubmissionService;