const Address = require('../schemas/address.schema');
const { default: axios } = require('axios');

const zipCodeService = {
	getCep: async (zipCodeProvided) => {
		try {
			const zipCode = await axios.get(`http://viacep.com.br/ws/${zipCodeProvided}/json/`);
			if (zipCode.data.erro || zipCode.data.valid == false || zipCode.data.length === 0) {
				return null;
			}

			return zipCode.data;
		}
		catch (error) {
			throw new Error(error);
		}
	},
	createAddress: async (dataAddress) => {
		try {
			const newAddress = await new Address(dataAddress);
			await newAddress.save();
			return newAddress;
		} catch (error) {
			throw new Error(error);
		}
	},

	showAdress: async (idAddress) => {
		try {
			const findAddress = await Address.findOne({ _id: idAddress }).
				populate('company')
				.exec();
			return (findAddress);
		} catch (error) {
			throw new Error(error);
		}
	}
};

module.exports = zipCodeService;