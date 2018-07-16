const express = require("express"), router = express.Router(), jwt = require("jsonwebtoken");

/*router.options('/create', (req, res) => {
	res.header('Access-Control-Allow-Methods', 'POST');
	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
	res.sendStatus(200);
});*/

let AuthController = require("@controllers/auth/auth.controller");

router.use((req, res, next) => {
	console.log(express().get('salt'));
	next();
});

router.get('/', AuthController.proceed());

module.exports = router;