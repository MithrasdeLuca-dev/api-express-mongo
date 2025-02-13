const { body } = require('express-validator');

const fullNameRegex = /^([A-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ][a-záàâãéèêíïóôõöúçñ]*\s?(de|do|da|dos|das)?\s?)+[A-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ][a-záàâãéèêíïóôõöúçñ]*$/;
const fullNameNumberRegex = /^\D+$/;
// const passwordRegex = /^(?=.*[@#$%])(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9@#$%]{8,12}$/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%])[^&^+§!]{8,12}$/;
const mailRegex = /^[a-zA-Z0-9.!#$%&'*+/?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const userValidator = {
  validityUpdate: [
    body('fullName').notEmpty().withMessage('O campo nome completo é obrigatório.').bail()
      .matches(fullNameNumberRegex).withMessage('O campo nome completo não deve conter números').bail()
      .matches(fullNameRegex).withMessage('Informe o nome e sobrenome com as iniciais em letra maiúscula.').bail()
      .isLength({ max: 100 }).withMessage('O nome completo deve ter no máximo 100 caracteres.').bail(),
    body('mail').notEmpty().withMessage('O campo e-mail é obrigatório.').bail()
      .isEmail().withMessage('O e-mail informado é inválido. Informe um e-mail no formato [nome@domínio.com].').bail()
      .matches(mailRegex).withMessage('O e-mail informado é inválido. Informe um e-mail no formato [nome@domínio.com].').bail(),
  ],

  validityPassword: [

    body('password')
      .notEmpty().withMessage('Campo senha é obrigatório').isLength({ min: 8, max: 12 }).withMessage('A senha deve ter entre 8 e 12 caracteres').bail()
      .matches(passwordRegex).withMessage('Senha precisa ter: uma letra maiúscula, uma letra minúscula, um número, um caractere especial(@#$%) e tamanho entre 8-12.')
    ,

    body('confirmPassword')
      .notEmpty().withMessage('O campo de confirmação de senha não pode ficar vazio.')
      .custom((value, { req }) => {
        if (value !== req.body.password) {
          throw new Error('As senhas não conferem.');

        }
        return true;
      }),
  ],
};

module.exports = userValidator;
