const express = require("express"), router = express.Router(), jwt = require("jsonwebtoken");
const fs = require('fs');

let AuthController = require("@controllers/auth/auth.controller");

router.options('/', (req, res) => {
	res.header('Access-Control-Allow-Methods', 'GET');
	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, X-Access-Token');
	res.sendStatus(200);
});


router.use((req, res, next) => {
	if (req.path === '/') return next();
	if (req.method === 'OPTIONS') return next();

	let token = req.header('X-Access-Token') ? req.header('X-Access-Token') : null;
	let isValid = false;

	if (!token) {
		return res.sendStatus(404);
	} else {
		try {
			let jwtVerification = jwt.verify(token, req.app.get('salt'));

			if (jwtVerification.hasOwnProperty('token')) isValid = true;
		} catch (e) {
			console.log(e.message);
		}
	}

	console.log(isValid);
	next();
});

router.get('/', AuthController.proceed());

router.get('/pdf', (req, res) => {
	var pdf = null;
	fs.readFile('private/download.pdf', (err, data) => {
		if (err) console.log(err);

		pdf = err ? null : data;

		res.contentType('application/pdf');
		res.send(pdf);
	});
});

module.exports = router;