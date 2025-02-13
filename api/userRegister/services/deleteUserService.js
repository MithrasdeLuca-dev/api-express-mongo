const roles = require('../../../config/rolesPermissions');
const User = require('../userModel');
const { STUDENT, SYSADMIN } = roles.ROLES_PERMISSIONS;

const userService = {
  deleteStudent: async (findUser) => {
    try {
      if (findUser.accessProfile === STUDENT) {

        const deleteUser = await User.findByIdAndDelete(findUser._id);
        if (deleteUser) {
          return { msg: 'Estudante deletado com sucesso!.' };
        }
      }
    } catch (error) {
      throw new Error(error);
    }
  },

  deleteAdmin: async (userRequest, findUser) => {
    try {
      if (findUser._id.toString() !== userRequest.id
				&& findUser.accessProfile !== SYSADMIN ) {

        const deleteUser = await User.findByIdAndDelete(findUser._id);
        if (deleteUser) {
          return { msg: 'Usuário deletado com sucesso!.' };
        }
      }
    } catch (error) {
      throw new Error(error);
    }
  },
};

module.exports = userService;
