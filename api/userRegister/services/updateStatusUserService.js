const roles = require('../../../config/rolesPermissions');
const GetCurrentDateHelper = require('../../common/getCurrentDateHelper');
const User = require('../userModel');

const { SYSADMIN } = roles.ROLES_PERMISSIONS;

const updateStatusUserService = {

  updateStatusGroup: async (status, idUser, findUser, userRequest) => {
    const { id, login } = userRequest;
    const updateDate = GetCurrentDateHelper();
    try {
      if (findUser._id.toString() !== userRequest.id
        && findUser.accessProfile !== SYSADMIN) {

        await User.findByIdAndUpdate(idUser, {
          status,
          audit: [
            ...findUser.audit,
            {
              updateDate,
              updatedBy: { userId: id, userLogin: login },
            },
          ],
        });
        return { msg: `Status do usuario atualizado com sucesso para status ${status}.` };
      }
    } catch (error) {
      throw new Error(error);
    }
  },
};
module.exports = updateStatusUserService;
