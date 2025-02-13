# RELEASE 01

## Introdução
TODO: Esse é um projeto de backend e foi desenvolvido utilizando NodeJS, JavaScript e conexões com o banco de dados MongoDB. Após baixar o projeto será necessário executar o comando `npm install` para instalar as dependências. Para configuração do ambiente basta seguir as instruções abaixo.

## API
A API REST foi implementada utilizando um módulo Node chamado [node-restful](https://github.com/baugarten/node-restful).

## Antes de começar
Para a aplicação funcionar é necessário:
- Instalar o [NodeJS](https://nodejs.org/en/)
- Instalar o banco de dados para armazenamento [MongoDB](https://www.mongodb.com/try/download/community). Pode-se usar o MongoDB Atlas para uma base de dados remota.
- Fazer o clone do repositório. Após o clone do repositório, seguir as instruções a seguir.

## Configuração
1. Instalar os módulos do Node utilizando o **npm**:
```sh
$ npm install
```
2. Rodar o Swagger autogen no package.json:
```sh
$ npm run swagger-autogen
```
3. Criar um arquivo `.env` com base no `.env.example`. As URLs do MongoDB devem conter um usuário, senha e nome do banco. Caso a senha contenha `@`, o `@` deve ser trocado por `%40`. Por exemplo, `teste@1234` ficaria `teste%401234`.

4. O sysadmin é criado após rodar o comando:
```sh
$ npm run
```

## Edição do Swagger
Para editar o Swagger, deve-se editar o arquivo do módulo dentro de `docsDefinitions`. Por exemplo, para o módulo `user`, edite o arquivo `userDefinition.js`.

Para adicionar um novo módulo e documentar com Swagger, é necessário:
1. Criar um módulo novo com controllers, validators, services, model e um arquivo `router` para ele.
2. Criar um novo `definition.js` com o nome do módulo dentro de `docs>docsDefinitions`.
3. Adicionar a rota no `routerSwagger.js` dentro de `config` para que o Swagger leia o endpoint a ser documentado.
4. No arquivo `router` do novo módulo, use a estrutura de documentação dentro da rota como no exemplo abaixo:
```javascript
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
```

Para que as mudanças surtam efeito, rode o Swagger autogen novamente:
```sh
$ npm run swagger-autogen
```

Para visualizar, acesse `http://localhost:port/api-docs/`.

## Verificação e Correção de Erros de Indentação
Para verificar erros de indentação, rode o ESLint:
```sh
$ npm run lint
```

Para corrigir automaticamente os erros de indentação, rode:
```sh
$ npm run lint:fix
```
