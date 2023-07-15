const zipCodeService = require('../services/zipCodeService');

const zipCodeController = {
	zipCode: async (request, response) => {
		const zipCodeProvided = request.body.zipCode;

		try {
			const zipCode = await zipCodeService.getCep(zipCodeProvided);
			if (zipCode) return response.status(200).json(zipCode);

			return response.status(404).json({ msg: 'CEP não encontrado.' });
		}
		catch (error) {
			return response.status(500).json({ error: error.message });
		}

	}
};

module.exports = zipCodeController;