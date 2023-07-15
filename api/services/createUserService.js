const User = require('../schemas/user.schema');

const createUserService = {

	showUser: async () => {
		try {
			const showUsers = await User.find();
			const users = await User.count();
			return { users, showUsers };
		} catch (error) {
			throw new Error(error);
		}
	},


	createNewUser: async (dataUser) => {
		const { fullName, mail, password, accessProfile, cpf, registration } = dataUser;
		console.log('dataUser');
		try {
			const newUser = await new User(
				{
					fullName,
					mail,
					password,
					accessProfile,
					cpf,
					status: true,
					registration,
				});
			await newUser.save();
			return { msg: `Olá ${newUser.fullName} cadastro realizado com sucesso.`, newUser };
		} catch (error) {
			throw new Error(error);
		}
	}
};

module.exports = createUserService;