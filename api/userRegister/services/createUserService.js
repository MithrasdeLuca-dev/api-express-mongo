const User = require('../userModel');
const bcrypt = require('bcrypt');
const GetCurrentDateHelper = require('../../common/getCurrentDateHelper');

const createUserService = {
  createNewUser: async (userData, requestUser) => {

    const userId = requestUser.id;
    const userLogin = requestUser.login;
    const registrationDate = GetCurrentDateHelper();
    const saltPassword = bcrypt.genSaltSync();
    const passwordHash = bcrypt.hashSync(userData.password, saltPassword);

    try {
      const countUser = await User.countDocuments();
      const registrationNumber = 'User' + (countUser + 1);
      const newUser = new User(
        {
          ...userData,
          password: passwordHash,
          status: true,
          audit: [
            {
              registrationNumber,
              registrationDate,
              registeredBy: { userId, userLogin },
            },
          ],
        });

      await newUser.save();
      const user = await User.findOne({ _id: newUser._id }).select('-password');

      return { msg: `Olá ${newUser.fullName}, cadastro realizado com sucesso.`, user };
    }
    catch (error) {
      throw new Error(error);
    }
  },
};

module.exports = createUserService;