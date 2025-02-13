const roles = require('../../../config/rolesPermissions');
const { validationResult } = require('express-validator');
const userSearch = require('../services/userSearch');
const updateUserService = require('../services/updateUserService');
const { SYSADMIN, MESSAGE_PERMISSION_DENIED } = roles.ROLES_PERMISSIONS;
const bcrypt = require('bcrypt');

const updateUserController = {
  update: async (request, response) => {
    const listErrors = validationResult(request);
    const requestUser = request.user;
    const userData = request.body;
    userData.id = request.params.id;
    const errorMessages = listErrors.errors.map(error => error.msg);

    try {
      const findUser = await userSearch.findUserById(userData.id);

      if (!findUser) {
        return response.status(400).json({ alert: ['Esse usuário não existe em nossa base de dados.'] });
      }

      if (findUser.accessProfile !== SYSADMIN && requestUser.role !== SYSADMIN) {
        if (listErrors.isEmpty()) {
          const verifyMail = await userSearch.findUserByMail(userData, findUser);

          if (verifyMail) { return response.status(400).json(verifyMail); }
          const updateUser = await updateUserService.updateUserById(
            userData,
            requestUser,
            findUser,
          );
          if (updateUser) { return response.status(200).json(updateUser); }

        } return response.status(400).json({ error: errorMessages });
      } return response.status(400).json({ msg: MESSAGE_PERMISSION_DENIED });
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  },

  updatePassword: async (request, response) => {
    const listErrors = validationResult(request);

    const requestUser = request.user;
    const userData = request.body;
    userData.id = request.params.id;

    try {
      const errorMessages = listErrors.errors.map(error => error.msg);

      const findUser = await userSearch.findUserById(userData.id);
      if (!findUser) { return response.status(400).json({ msg: 'Esse usuário não existe em nossa base de dados.' }); }

      if (findUser.accessProfile !== SYSADMIN && requestUser.role !== SYSADMIN) {
        if (listErrors.isEmpty()) {

          if (bcrypt.compareSync(userData.password, findUser.password)) {
            return response.status(409).json({ msg: 'Essa senha já foi utilizada anteriormente. Por favor, escolha uma nova senha.' });
          }

          const updatePasswordUser = await updateUserService.updatePasswordById(
            userData,
            requestUser,
            findUser,
          );
          if (updatePasswordUser) { return response.status(200).json(updatePasswordUser); }

        } return response.status(400).json({ error: errorMessages });
      } return response.status(400).json({ msg: MESSAGE_PERMISSION_DENIED });
    } catch (error) {
      return response.status(500).json({ errors: error.message });
    }

  },

};

module.exports = updateUserController;
