const express = require('express'), router = express.Router();

router.use('/companies', require('@routes/api/company'));
router.use('/texts', require('@routes/api/text'));
router.use('/submissions', require('@routes/api/submission'));

router.use('/auth', require('@routes/auth/auth'));

module.exports = router;
