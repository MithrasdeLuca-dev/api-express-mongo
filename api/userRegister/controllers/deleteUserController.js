const deleteUserService = require('../services/deleteUserService');
const userSearch = require('../services/userSearch');
const roles = require('../../../config/rolesPermissions');

const { MESSAGE_PERMISSION_DENIED } = roles.ROLES_PERMISSIONS;

const deleteUserController = {
  deleteStudent: async (request, response) => {
    const { id } = request.params;
    try {
      const findUser = await userSearch.findUserById(id);
      if (!findUser) { return response.status(400).json({ alert: ['Esse usuário não existe em nossa base de dados.'] }); }
      const deleteUser = await deleteUserService.deleteStudent(findUser);

      if (deleteUser) {
        return response.status(200).json(deleteUser);
      }
      return response.status(400).json({ msg: MESSAGE_PERMISSION_DENIED });
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  },

  delete: async (request, response) => {
    const { id } = request.params;
    const userRequest = request.user;
    try {
      const findUser = await userSearch.findUserById(id);
      if (!findUser) { return response.status(400).json({ alert: ['Esse usuário não existe em nossa base de dados.'] }); }
      const deleteUser = await deleteUserService.deleteAdmin(userRequest, findUser);

      if (deleteUser) {
        return response.status(200).json(deleteUser);
      }
      return response.status(400).json({ msg: MESSAGE_PERMISSION_DENIED });
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  },

};

module.exports = deleteUserController;
