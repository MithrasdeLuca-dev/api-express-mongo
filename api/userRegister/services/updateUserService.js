const bcrypt = require('bcrypt');
const roles = require('../../../config/rolesPermissions');
const User = require('../userModel');
const GetCurrentDateHelper = require('../../common/getCurrentDateHelper');

const { ADMIN } = roles.ROLES_PERMISSIONS;

const updateUserService = {

  updateUserById: async (userData, requestUser, findUser) => {
    const { id } = userData;
    const userId = requestUser.id;
    const userLogin = requestUser.login;
    const updateDate = GetCurrentDateHelper();

    try {
      if (id === requestUser.id || requestUser.role === ADMIN) {
        const updatedUser = await User.findByIdAndUpdate(id,
          {
            ...userData,
            status: true,
            audit: [
              ...findUser.audit,
              {
                updateDate,
                updatedBy: { userId, userLogin },
              },
            ],
          },
          {
            new: true,
          });
        return { msg: 'Dados atualizados com sucesso!', updatedUser };
      }
    }
    catch (error) {
      throw new Error(error);
    }
  },

  updatePasswordById: async (userData, requestUser, findUser) => {
    const { id, password } = userData;
    const userId = requestUser.id;
    const userLogin = requestUser.login;
    const updateDate = GetCurrentDateHelper();
    const saltPassword = bcrypt.genSaltSync();
    const passwordHash = bcrypt.hashSync(password, saltPassword);

    try {
      if (id === requestUser.id || requestUser.role === ADMIN) {

        await User.findByIdAndUpdate(id,
          {
            ...userData,
            password: passwordHash,
            audit: [
              {
                ...findUser.audit,
                updateDate,
                updatedBy: { userId, userLogin },
              },
            ],
          },
          {
            new: true,
          });
        return { msg: 'Senha atualizada com sucesso!' };
      }
    } catch (error) {
      throw new Error(error);
    }
  },
};

module.exports = updateUserService; 
