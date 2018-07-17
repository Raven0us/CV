const express = require("express"), router = express.Router();

let SubmissionController = require("@controllers/submission.controller");
let SubmissionHandler = new SubmissionController();

router.options('/create', (req, res) => {
	res.header('Access-Control-Allow-Methods', 'POST');
	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, X-Access-Token');
	res.sendStatus(200);
});

router.post('/create', (req, res, next) => {
	router.use(express.json());
	next();
}, SubmissionHandler.insertEntry());

module.exports = router;