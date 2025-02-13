const userSearch = require('../services/userSearch');

const userController = {

  count: async (request, response) => {
    try {
      const count = await userSearch.countUser();

      if (count) {
        return response.status(200).json({ count });
      } return response.status(404).json({ alert: ['Não foi possível encontrar usuários em nossa base de dados.'] });
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  },

  index: async (request, response) => {
    const {id} = request.params;
    try {
      const index = await userSearch.findUserById(id);

      if (index) {
        return response.status(200).json(index);
      } return response.status(404).json({ alert: ['Esse usuário não existe em nossa base de dados.'] });
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  },

  list: async (request, response) => {
    const paginationQuery = request.query;
    try {
      const listUsers = await userSearch.list(paginationQuery);

      if (listUsers) {
        return response.status(200).json(listUsers);
      } return response.status(404).json({ alert: ['Não foi possível encontrar usuários em nossa base de dados.'] });
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  },

};

module.exports = userController;