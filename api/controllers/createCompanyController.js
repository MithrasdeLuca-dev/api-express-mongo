const CompanyService = require('../services/companyService');
const zipCodeService = require('../services/zipCodeService');

const createCompanyController = {
	show: async (request, response) => {
		try {
			const showUsers = await CompanyService.showCompany();
			if (showUsers) {
				return response.status(200).json(showUsers);
			} return response.status(404).json({ msg: 'Não foi possível encontrar companhias em nossa base de dados.' });
		} catch (error) {
			return response.status(500).json({ error: error.message });
		}
	},
	create: async (request, response) => {

		const { dataCompany, dataAddress } = request.body;
		try {
			const newAddress = await zipCodeService.createAddress(dataAddress);

			if (newAddress) {
				const newCompany = await CompanyService.createNewUser(newAddress._id, dataCompany);
				return response.status(201).json(newCompany);
			}
			return response.status(400).json({ msg: 'Não foi possível cadastrar o endereço. ' });
		} catch (error) {
			return response.status(500).json({ error: error.message });
		}
	}
};

module.exports = createCompanyController;