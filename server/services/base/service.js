class BaseService {
	/**
	 * @param model
	 */
	constructor(model) {
		this.model = model;
	}

	/**
	 * @param model
	 * @param attributes
	 */
	static loadAttributes(model, attributes) {
		for (let attribute in attributes) {
			if (attributes.hasOwnProperty(attribute)) {
				model[attribute] = attributes[attribute];
			}
		}
	};

	/**
	 * @param query
	 * @returns {Promise.<*>}
	 */
	async fetchData(query) {
		try {
			return await this.model.find(query);
		} catch (e) {
			throw Error(e.message);
		}
	}

	/**
	 * @param data
	 * @returns {Promise.<*>}
	 */
	async insertData(data) {
		try {
			let entry = new this.model;

			BaseService.loadAttributes(entry, data);
			return await entry.save().then((model) => {
				return model;
			});
		} catch (e) {
			throw Error(e.message);
		}
	}
}

/**
 * @type {BaseService}
 */
module.exports = BaseService;