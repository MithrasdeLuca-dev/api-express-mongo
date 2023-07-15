const Company = require('../schemas/company.schema');

const userSearch = {

	showCompany: async () => {
		try {
			const showCompany = await Company.find();
			const company = await Company.count();
			return { company, showCompany };
		} catch (error) {
			throw new Error(error);
		}
	},
	createNewUser: async (dataUser) => {
		try {
			const newCompany = await new Company(dataUser);
			await newCompany.save();
			return { msg: `Olá a companhia ${newCompany.corporateName} foi cadastrada com sucesso.`, newCompany };
		} catch (error) {
			throw new Error(error);
		}
	}
};
module.exports = userSearch;