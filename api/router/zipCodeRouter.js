const express = require('express');

const zipCodeController = require('../controllers/zipCodeController');

const router = express.Router();

router.post('/', zipCodeController.zipCode);
router.get('/cep', (req, res) => res.send('Rota Funcionando'));

router.get('/:idAddress', zipCodeController.show);
module.exports = router;