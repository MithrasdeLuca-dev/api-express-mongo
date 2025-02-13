const { body } = require('express-validator');
const fullNameRegex = /^([A-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ][a-záàâãéèêíïóôõöúçñ']*[\s']?(de|do|da|dos|das)?[\s']?)+[A-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ][a-záàâãéèêíïóôõöúçñ']*$/;
const fullNameNumberRegex = /^\D+$/;
// const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,12}$/;
const passwordRegex = /^(?=.*[@#$%])(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9@#$%]{8,12}$/;
const mailRegex = /^[a-zA-Z0-9.!#$%&'*+/?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const createUserValidator = {
  store: [
    body('fullName').notEmpty().withMessage('O campo nome completo é obrigatório.').bail()
      .matches(fullNameNumberRegex).withMessage('O campo nome completo não deve conter números').bail()
      .matches(fullNameRegex).withMessage('Informe o nome e sobrenome com as iniciais em letra maiúscula e sem caracteres especiais.').bail()
      .isLength({ max: 100 }).withMessage('O nome completo deve ter no máximo 100 caracteres.').bail(),

    body('mail').notEmpty().withMessage('O campo e-mail é obrigatório.').bail().
      isEmail().withMessage('O e-mail informado é inválido. Informe um e-mail no formato [nome@domínio.com].').bail()
      .matches(mailRegex).withMessage('O e-mail informado é inválido. Informe um e-mail no formato [nome@domínio.com].').bail(),

    body('password').notEmpty().withMessage('O campo senha é obrigatório').bail().matches(passwordRegex)
      .withMessage('Senha precisa ter: uma letra maiúscula, uma letra minúscula, um número, um caractere especial(@#$%) e tamanho entre 8-12.').bail(),

    body('cpf').notEmpty().withMessage('O campo CPF é obrigatório!').bail()
      .isLength({ min: 11, max: 11 }).withMessage('Deve preencher o CPF com 11 dígitos').bail()
      .isNumeric().withMessage('Campo CPF deve conter apenas números').bail(),

    body('accessProfile').notEmpty().withMessage('O campo perfil de acesso é obrigatório.').bail().custom(value => {
      if (value !== 'ADMIN') {
        throw new Error('O campo perfil de acesso deve ser preenchido de acordo com o seu cargo exemplo: ADMIN.');
      } return true;
    }).bail(),

    body('confirmPassword').notEmpty().withMessage('O campo de confirmação de senha é obrigatório.')
      .if(body('password').notEmpty()).bail()
      .custom((value, { req }) => {
        if (value !== req.body.password) {
          throw new Error('As senhas não conferem.');
        } return true;
      },
      ).bail(),
  ],

  status: [
    body('status').notEmpty().isBoolean().withMessage('O campo status deve ser do tipo boolean').bail(),
  ],
};

module.exports = createUserValidator;
