const roles = require('../rolesPermissions');
const { ADMIN, MESSAGE_PERMISSION_DENIED, SYSADMIN } = roles.ROLES_PERMISSIONS;

const authMiddleware = {
  authPermissionAdmin: async (request, response, next) => {
    const userRequest = request.user;
    
    if(!userRequest) return response.status(403).json({ msg: MESSAGE_PERMISSION_DENIED });

    if (userRequest.role === ADMIN || userRequest.role === SYSADMIN) {
      return next();
    }
   
    return response.status(403).json({ msg: MESSAGE_PERMISSION_DENIED });
  },
};
module.exports = authMiddleware;