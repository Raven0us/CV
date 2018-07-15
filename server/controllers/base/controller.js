class BaseController {
	/**
	 * @param service
	 */
	constructor(service) {
		this.service = service;
	}

	/**
	 * @param query
	 * @returns {Function}
	 */
	getEntries(query) {
		let self = this;

		return async function (req, res) {
			if (req.queryParams) query = req.queryParams;

			try {
				let entries = await self.service.fetchData(query);
				return res.status(200).json({
					data: entries
				});
			} catch (e) {
				console.log(e.message);
			}
		}
	}

	/**
	 * @returns {Function}
	 */
	insertEntry() {
		let self = this;

		return async function (req, res) {
			try {
				let entry = await self.service.insertData(req.body);
				return res.status(200).json({
					data: entry
				});
			} catch (e) {
				console.log(e.message);
			}
		}
	}
}

/**
 * @type {BaseController}
 */
module.exports = BaseController;