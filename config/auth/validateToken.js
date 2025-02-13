const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.TOKEN_SECRET;

const checkToken = {
  validateToken: async (request, response) => {
    const token = request.headers['authorization'];
    try {

      jwt.verify(token, secret, function (err) {
        return response.status(200).send({ valid: !err });
      });

    } catch (error) {
      return response.status(400).send({ valid: false });
    }
  },
};

module.exports = checkToken;