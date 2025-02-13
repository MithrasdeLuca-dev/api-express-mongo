const userDefinitions = require('./docsDefinitions/userDefinitions');
const authDefinitions = require('./docsDefinitions/authDefinitions');

require('dotenv').config();

const options = {
  openapi: '3.0.0',
  language: 'pt-br',
  disableLogs: false,
  autoHeaders: true,
  autoQuery: true,
  autoBody: false,
  writeOutputFile: true,
};

const swaggerAutogen = require('swagger-autogen')(options);

const endpointsFiles = ['../docs/routesSwagger.js'];

const outputFile = './swagger_output.json';

const doc = {
  host: process.env.APP_API_HOST,
  info: {
    version: '1.0.0',
    title: 'API-Academy',
    description: 'A API foi desenvolvida para estudos de <strong>Quality Assurance</strong>.'
      + '\n\nO Swagger (também conhecido como OpenApi) é uma biblioteca muito conhecida no universo backend, disponível para diversas linguagens e frameworks.'
      + '\n\nEle gera um site interno no seu backend que descreve, com muitos detalhes, cada endpoint e estrutura de entidades presentes na sua aplicação.'
      + '\n\nPara consumir a API, é necessário fazer login na <strong>Tag Auth</strong> usando o endpoint - <strong>api/login</strong>.',
    contact: {
      name: 'Support',
      email: 'contato@email.com',
    },
  },
  securityDefinitions: {
    authKey: {
      type: 'apiKey',
      in: 'header',
      name: 'Authorization',
      description: 'Digite o token que você possui',
    },
  },
  tags: [
    {
      name: 'Auth',
      description: 'Endpoints relacionados ao login.',
    },
    {
      name: 'Users',
      description: 'Relaciona os endpoints referentes aos usuário.',
    },
  ],
  definitions: {
    ...authDefinitions,
    ...userDefinitions,
  },

  schemes: ['https'],
};

swaggerAutogen(outputFile, endpointsFiles, doc);
