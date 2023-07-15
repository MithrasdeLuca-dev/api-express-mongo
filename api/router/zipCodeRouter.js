const express = require('express');

const zipCodeController = require('../controllers/zipCodeController');

const router = express.Router();

router.post('/', zipCodeController.zipCode);
router.get('/cep', (req, res) => res.send('Rota Funcionando'));
module.exports = router;