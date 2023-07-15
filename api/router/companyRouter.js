const express = require('express');
const router = express.Router();


const companyController = require('../controllers/createCompanyController');


router.get('/', companyController.show);

router.post('/register', companyController.create);

module.exports = router;