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
};

module.exports = zipCodeService;
