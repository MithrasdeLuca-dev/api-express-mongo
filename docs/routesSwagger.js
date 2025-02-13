const express = require('express');

const auth = require('./auth/auth');
const authPermissionAdmin = require('./auth/authPermission');
const validateToken = require('./auth/validateToken');

const loginRouter = require('../api/login/loginRouter');
const userRegisterRouter = require('../api/userRegister/userRouter');

module.exports = function (server) {
  server.use('/status', (req, res) => res.send('BACKEND is running - Status: OK'),
  );

  const protectedApi = express.Router();
  server.use('/api', protectedApi);

  protectedApi.use('/login', loginRouter);
  protectedApi.get('/validateToken', validateToken.validateToken,
    /*
    #swagger.tags = ['Auth']
    #swagger.description = Endpoint usado para a logar.
    #swagger.security = [{
      "authKey": []
    }]
  	
    #swagger.responses[200] = {
      schema:{
        $ref:'#/definitions/ValidateToken'
      } 
    }
    */
  );

  protectedApi.use(auth);
  protectedApi.use(authPermissionAdmin.authPermissionAdmin);
  protectedApi.use('/user', userRegisterRouter);

  server.use(express.static(require('path').join(__dirname, '../public')));
};
