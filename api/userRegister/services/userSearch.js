const PaginationHelper = require('../../common/paginationHelper');
const User = require('../userModel');

const userSearch = {

  list: async (paginationQueries) => {
    const { page, limit } = paginationQueries;
    try {
      const listUsers = await User.find();

      const orderedList = listUsers.sort((a, b) => {
        if (`${a.fullName}` < `${b.fullName}`) {
          return -1;
        }
        if (`${a.fullName}` < `${b.fullName}`) {
          return 1;
        }
        return 0;
      });

      const list = PaginationHelper(orderedList, parseInt(page), parseInt(limit));

      return list;
    } catch (error) {
      throw new Error(error);
    }
  },

  countUser: async () => {
    const count = await User.countDocuments();
    return count;
  },

  verifyUserByMail: async (dataUser) => {
	
    try {
      const verifyMail = await User.findOne({ mail: dataUser.mail });
      if (verifyMail) {
        return { alert: ['E-mail já cadastrado.'] };
      }
    } catch (error) {
      throw new Error(error);
    }
  },

  verifyUserByCpf: async (dataUser) => {
    try {
      const verifyCpf = await User.findOne({ cpf: dataUser.cpf });
      if (verifyCpf) {
        return { alert: ['O cpf informado já existe em nossa base de dados.'] };
      }
    } catch (error) {
      throw new Error(error);
    }
  },

  findUserByMail: async (dataUser, findUser) => {
    try {
      const findUserByMail = await User.findOne({ mail: dataUser.mail });
      if (findUserByMail && findUser._id.toString() !== findUserByMail._id.toString()) {
        return { alert: ['E-mail já cadastrado.'] };
      }
    } catch (error) {
      throw new Error(error);
    }
  },

  findUserById: async (idUser) => {
    try {
      const verifyUser = await User.findById(idUser);
      if (verifyUser) {
        return verifyUser;
      }
    } catch (error) {
      throw new Error(error);
    }
  },
};
module.exports = userSearch;
