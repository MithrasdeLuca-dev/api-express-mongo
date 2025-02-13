const roles = require('../../../config/rolesPermissions');
const updateStatusUserService = require('../services/updateStatusUserService');
const userSearch = require('../services/userSearch');
const { MESSAGE_PERMISSION_DENIED } = roles.ROLES_PERMISSIONS;
const updateStatusUserController = {

  updateStatus: async (request, response) => {
    const { status } = request.body;
    const { id } = request.params;
    const userRequest = request.user;
    try {
      const findUser = await userSearch.findUserById(id);
      if (!findUser) { return response.status(404).json(findUser); }

      const updateStatusUser = await updateStatusUserService.updateStatusGroup(status, id, findUser, userRequest);
      if (updateStatusUser) {
        return response.status(200).json(updateStatusUser);
      } return response.status(400).json({ msg: MESSAGE_PERMISSION_DENIED });

    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  },
};

module.exports = updateStatusUserController;
