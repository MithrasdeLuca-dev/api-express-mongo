const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (request, response, next) => {
  const secret = process.env.TOKEN_SECRET;

  if (request.method === 'OPTIONS') {
    next();
  } else {
    const token = request.body.token || request.query.token || request.headers['authorization'];

    if (!token) {
      return response.status(403).send({ errors: ['No token provided.'] });
    }
    jwt.verify(token, secret, function (err, decoded) {
      if (err) {
        return response.status(403).send({
          errors: ['Failed to authenticate token.'],
        });
      } else {
        request.user = { id: decoded._id, role: decoded.accessProfile, login: decoded.mail };
        next();
      }
    });
  }

};