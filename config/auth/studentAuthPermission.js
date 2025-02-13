const roles = require('../rolesPermissions');
const { STUDENT, MESSAGE_PERMISSION_DENIED } = roles.ROLES_PERMISSIONS;

const authMiddleware = {
  authPermissionStudent: async (request, response, next) => {
    const userRequest = request.user;

    if (userRequest.role === STUDENT) {
      return next();
    }

    return response.status(403).json({ msg: MESSAGE_PERMISSION_DENIED });
  },
};
module.exports = authMiddleware;
