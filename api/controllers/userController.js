const UserService = require('../services/createUserService');

const createUserController = {


	show: async (request, response) => {
		try {
			const showUsers = await UserService.showUser();
			if (showUsers) {
				return response.status(200).json(showUsers);
			} return response.status(404).json({ msg: 'Não foi possível encontrar usuários em nossa base de dados.' });
		} catch (error) {
			return response.status(500).json({ error: error.message });
		}
	},
	create: async (request, response) => {
		const dataUser = request.body;

		try {
			const newUser = await UserService.createNewUser(dataUser);
			return response.status(201).json(newUser);

		} catch (error) {
			return response.status(500).json({ error: error.message });
		}
	}
};

module.exports = createUserController;