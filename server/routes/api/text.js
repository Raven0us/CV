const express = require("express");
const router = express.Router();

let TextController = require("@controllers/text.controller");
let TextHandler = new TextController;

router.get('/', TextHandler.getEntries());

router.get('/:category', (req, res, next) => {
	req.queryParams = req.params.category ? {category: (req.params.category).toString()} : {};
	next();
}, TextHandler.getEntries());

module.exports = router;