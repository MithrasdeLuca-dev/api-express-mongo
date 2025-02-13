const bodyParser = require('body-parser');
const express = require('express');
const server = express();
require('dotenv').config();
const cors = require('cors');

const PORT = process.env.PORT;

const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../docs/swagger_output.json');

server.use((req, res, next) => { //Cria um middleware onde todas as requests passam por ele 
  if ((req.headers['x-forwarded-proto'] || '').endsWith('http')) //Checa se o protocolo informado nos headers é HTTP 
    res.redirect(`https://${req.headers.host}${req.url}`); //Redireciona pra HTTPS 
  else //Se a requisição já é HTTPS 
    next(); //Não precisa redirecionar, passa para os próximos middlewares que servirão com o conteúdo desejado.
});

const queryParser = require('express-query-int');

server.use(bodyParser.json({ limit: '50mb' }));
server.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
server.use(queryParser());
server.use(cors());
server.use(express.static('public'));

server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

server.listen(PORT, function () {
  console.log(`BACKEND is running on port ${PORT}.`);
  console.log(`Use para acessar a API: http://localhost:${PORT}/api`);
  console.log(`Use para Swagger: http://localhost:${PORT}/api-docs`);
});

module.exports = server;
