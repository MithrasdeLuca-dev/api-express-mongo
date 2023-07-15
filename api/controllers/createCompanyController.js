const CompanyService = require('../services/companyService');

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

		const dataCompany = request.body;

		try {
			const newCompany = await CompanyService.createNewUser(dataCompany);
			return response.status(201).json(newCompany);

		} catch (error) {
			return response.status(500).json({ error: error.message });
		}
	}
};

module.exports = createCompanyController;