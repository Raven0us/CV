const Token = require("@models/token.model");
const jwt = require("jsonwebtoken");

class AuthController {
	static proceed() {
		return async function (req, res) {
			let internalToken, internalTokenValue = req.query.token;

			if (!internalTokenValue) return res.sendStatus(404);

			internalToken = await Token.findOne({
				value: internalTokenValue
			}).exec();

			if (!internalToken) return res.sendStatus(404);

			let token = jwt.sign({
				token: internalToken.value
			}, req.app.get('salt'), {
				algorithm: 'HS256',
				expiresIn: 86400
			});

			return res.status(200).json({
				token: token,
				expiresIn: 86400
			});
		}
	}
}

/**
 * @type {AuthController}
 */
module.exports = AuthController;