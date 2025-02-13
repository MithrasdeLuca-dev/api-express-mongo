const express = require('express');

const auth = require('./auth/auth');
const authPermissionAdmin = require('./auth/authPermission');
const validateToken = require('./auth/validateToken');

const loginRouter = require('../api/login/loginRouter');
const userRegisterRouter = require('../api/userRegister/userRouter');
const zipCodeRouter = require('../api/zipCode/zipCodeRouter');

module.exports = function (server) {
  server.use('/status', (req, res) => res.send('BACKEND is running - Status: OK'),
  );

  const protectedApi = express.Router();
  server.use('/api', protectedApi);
  protectedApi.use('/login', loginRouter);

  protectedApi.get('/validateToken', validateToken.validateToken);

  protectedApi.use(auth);

  protectedApi.use(authPermissionAdmin.authPermissionAdmin);

  protectedApi.use('/user', userRegisterRouter);
  protectedApi.use('/zipcode', zipCodeRouter);

  server.use(express.static(require('path').join(__dirname, '../public')));
};
