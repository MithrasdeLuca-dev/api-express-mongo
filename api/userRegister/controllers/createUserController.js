const roles = require('../../../config/rolesPermissions');
const { validationResult } = require('express-validator');
const createUserService = require('../services/createUserService');
const userSearch = require('../services/userSearch');
const { ADMIN, SYSADMIN, MESSAGE_PERMISSION_DENIED } = roles.ROLES_PERMISSIONS;

const createUserController = {
  create: async (request, response) => {
    const listErrors = validationResult(request);
    const userData = request.body;
    const requestUser = request.user;

    try {
      const errorMessages = listErrors.errors.map(error => error.msg);

      if (requestUser.role !== ADMIN && requestUser.role !== SYSADMIN) {
        return response.status(400).json({ alert: [MESSAGE_PERMISSION_DENIED] });
      }

      if (!listErrors.isEmpty()) {
        return response.status(400).json({ error: errorMessages });
      }

      const existingUser = await userSearch.verifyUserByCpf(userData);
      if (existingUser) { return response.status(409).json(existingUser); }

      const existingMail = await userSearch.verifyUserByMail(userData);
      if (existingMail) { return response.status(409).json(existingMail); }

      const newUser = await createUserService.createNewUser(userData, requestUser);
      return response.status(201).json(newUser);

    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  },
};

module.exports = createUserController;