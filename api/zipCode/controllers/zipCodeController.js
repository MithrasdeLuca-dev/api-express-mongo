const zipCodeService = require('../services/zipCodeService');
const { validationResult } = require('express-validator');

const zipCodeController = {
  zipCode: async (request, response) => {
    const listErrors = validationResult(request);
    const zipCodeProvided = request.body.zipCode;

    try {
      const errorMessages = listErrors.errors.map(error => error.msg);
      if (listErrors.isEmpty()) {
        const zipCode = await zipCodeService.getCep(zipCodeProvided);
        if (zipCode) return response.status(200).json(zipCode);

        return response.status(404).json({ msg: 'CEP não encontrado.' });
      }

      return response.status(400).json({ error: errorMessages });
    }
    catch (error) {
      return response.status(500).json({ error: error.message });
    }

  },
};

module.exports = zipCodeController;