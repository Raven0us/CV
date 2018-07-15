const express = require("express"), router = express.Router();

let CompanyController = require("@controllers/company.controller");
let CompanyHandler = new CompanyController;

router.get('/', CompanyHandler.getEntries({name: "Evolution Labs"}));

module.exports = router;