const express = require('express');

const zipCodeController = require('./controllers/zipCodeController');
const zipCodeValidator = require('./validators/zipCodeValidator');

const router = express.Router();

router.post('/', zipCodeValidator.store, zipCodeController.zipCode);

module.exports = router;