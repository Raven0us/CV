const express = require('express'), router = express.Router();

router.use('/companies', require('./api/company'));
router.use('/texts', require('./api/text'));
router.use('/submissions', require('./api/submission'));

module.exports = router;
