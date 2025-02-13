const express = require('express');
const router = express.Router();

const createUserValidator = require('./validators/createUserValidator');
const userValidator = require('./validators/userValidator');

const createUserController = require('./controllers/createUserController');
const deleteUserController = require('./controllers/deleteUserController');
const updateUserController = require('./controllers/updateUserController');
const updateStatusUserController = require('./controllers/updateStatusUserController');
const userController = require('./controllers/userController');

router.get(
  '/',
  userController.list,
  /*
    #swagger.tags = ['Users']
    #swagger.description = Endpoint usado para a listagem de usuário.
    #swagger.security = [{
      "authKey": []
    }]

    #swagger.responses[200] = {
      schema:{
        $ref:'#/definitions/ListUserResponse'
      } 
    }
  */
);

router.get(
  '/count',
  userController.count,
  /*
    #swagger.tags = ['Users']
    #swagger.description = Endpoint usado para a contagem de usuário.
    #swagger.security = [{
      "authKey": []
    }]

    #swagger.responses[200] = {
      schema:{
        $ref:'#/definitions/CountUserResponse'
      } 
    }
  */
);

router.get(
  '/:id',
  userController.index,
  /*
    #swagger.tags = ['Users']
    #swagger.description = Endpoint usado para mostrar um usuário.
    #swagger.security = [{
      "authKey": []
    }]

    #swagger.parameters['id'] = {
        in: 'path',
        name:'id',
        required: true,
        description: '<strong>id</strong> do usuário que deve utilizado.',
      }

    #swagger.responses[200] = {
      schema:{
        $ref:'#/definitions/IndexUserResponse'
      } 
    }
  */
);

router.post(
  '/',
  createUserValidator.store,
  createUserController.create,
  /*
  #swagger.tags = ['Users']
  #swagger.description = Endpoint usado para a criação de usuário.
  #swagger.security = [{
      "authKey": []
    }]
  
  #swagger.requestBody = {
      description: 'Contrato necessário para criar um usuário.',
      required: true,
      schema:{$ref:'#/definitions/RegisterUserRequest'}
    }

  #swagger.responses[201] = {
      schema:{
        $ref:'#/definitions/RegisterUserResponse'
      } 
    }
  */
);

router.put(
  '/:id',
  userValidator.validityUpdate,
  updateUserController.update,
  /*
    #swagger.tags = ['Users']
    #swagger.description = Endpoint usado para atualizar dados de um usuário passando o <strong>id</strong>.
    #swagger.security = [{
      "authKey": []
    }]

    #swagger.parameters['id'] = {
        in: 'path',
        name:'id',
        required: true,
        description: '<strong>id</strong> do usuário que deve ser atualizado.',
      }

    #swagger.requestBody = {
      description: 'Contrato necessário para atualizar dados de um usuário.',
      schema: {
        $ref: '#/definitions/UpdateUserRequest'
      }
    }

    #swagger.responses[200] = {
      schema: {
        $ref: '#/definitions/UpdateUserResponse'
      }
    }
  */
);

router.put(
  '/password/:id',
  userValidator.validityPassword,
  updateUserController.updatePassword,
  /*
    #swagger.tags = ['Users']
    #swagger.description = Endpoint usado para atualizar a senha de um usuário passando o <strong>id</strong>.
    #swagger.security = [{
      "authKey": []
      }]
    
    #swagger.parameters['id'] = {
        in: 'path',
        name:'id',
        required: true,
        description: '<strong>id</strong> do usuário que deve ser atualizado.',
    }

    #swagger.requestBody = {
        description: 'Contrato necessário para atualizar a senha de um usuário.',
        schema: {
          $ref: '#/definitions/UpdatePasswordUserRequest'
        }
      }
    #swagger.responses[200] = {
        schema: {
          $ref: '#/definitions/UpdatePasswordUserResponse'
        }
      }
    */
);

router.put(
  '/status/:id',
  createUserValidator.status,
  updateStatusUserController.updateStatus,
  /*
    #swagger.tags = ['Users']
    #swagger.description = Endpoint usado para atualizar o status de um usuário passando o <strong>id</strong>.
    #swagger.security = [{
    "authKey": []
    }]
    #swagger.parameters['id'] = {
        in: 'path',
        name:'id',
        required: true,
        description: '<strong>id</strong> do usuário que deve ser atualizado.',
      }
    #swagger.requestBody = {
        description: 'Contrato necessário para atualizar o status de um usuário.',
        schema: {
          $ref: '#/definitions/UpdateStatusUserRequest'
        }
      }
    #swagger.responses[200] = {
        schema: {
          $ref: '#/definitions/UpdateStatusUserResponse'
        }
      }
  */
);

router.delete(
  '/:id',
  deleteUserController.delete,
  /*
    #swagger.tags = ['Users']
    #swagger.description = Endpoint usado para deletar um usuário passando o <strong>id</strong>.
    #swagger.security = [{
      "authKey": []
      }]
    }]
      #swagger.parameters['id'] = {
      in: 'path',
      name:'id',
      required: true,
      description: '<strong>id</strong> do usuário que deve ser deletado.',
    }
    #swagger.responses[200] = {
      schema: {
        $ref: '#/definitions/DeleteResponse'
      }
    }
  */
);

module.exports = router;
