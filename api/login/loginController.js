require('dotenv').config();
const _ = require('lodash');
const User = require('../userRegister/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const sendErrorsFromDB = (res, dbErrors) => {
  const errors = [];
  _.forIn(dbErrors.errors, error => errors.push(error.message));
  return res.status(400).json({ errors });
};

const loginController = {
  login: async (request, response) => {
    const { mail, password } = request.body;
    const mailMessage = 'O campo e-mail é obrigatório.';
    const passwordMessage = 'O campo senha é obrigatório.';

    if (mail === '' && password === '') {
      return response.status(400).json(
        {
          mail: mailMessage,
          password: passwordMessage,
        },
      );
    } else if (mail === '') {
      return response.status(400).json(
        {
          mail: mailMessage,
        },
      );
    } else if (password === '') {
      return response.status(400).json(
        {
          password: passwordMessage,
        },
      );
    }

    const secret = process.env.TOKEN_SECRET;
    const expires = process.env.TOKEN_EXPIRATION;

    try {
      let user = await User.findOne({ mail: mail });
      if (!user) return response.status(400).json({ 'alert': 'E-mail ou senha informados são inválidos.' });

      const isPasswordCorrect = bcrypt.compareSync(password, user.password);
      if (!isPasswordCorrect) return response.status(400).json({ 'alert': 'E-mail ou senha informados são inválidos.' });

      const token = jwt.sign(user.toObject(), secret, { expiresIn: expires });

      return response.status(200)
        .json({ msg: `Olá ${user.fullName ?? user.name + ' ' + user.lastName}, autenticação autorizada com sucesso!`, user, token });

    } catch (error) {
      sendErrorsFromDB(response, error);
    }
  },
};

module.exports = loginController;
