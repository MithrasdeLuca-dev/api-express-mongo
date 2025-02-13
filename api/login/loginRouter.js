const express = require('express');
const router = express.Router();

const loginController = require('./loginController');

router.post('/', loginController.login,
  /*
  #swagger.tags = ['Auth']
  #swagger.description = Para acessar endpoints protegidos Token, você precisa fazer o login e fornecer esse token para o Swagger. 
  Geralmente, há um campo "Authorize" ou "Authentication" na interface do Swagger, onde você pode inserir o token.
.
  
  #swagger.requestBody = {
      description: 'Contrato necessário para logar.',
      required: true,
      schema:{$ref:'#/definitions/LoginRequest'}
    }

	#swagger.responses[200] = {
      schema:{
        $ref:'#/definitions/LoginResponse'
      } 
    }
  */
);

module.exports = router;