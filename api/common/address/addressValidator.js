const { body } = require('express-validator');

// const alphanumericRegex = /^[\p{L}\p{N}\s]+$/u;
const zipCodeRegex = /^\d{8}$/;
const stateRegex = /^[A-Z\s]+$/;
const addressRegex = /^[ªº'\p{L}\d\s-]+$/u;
const cityRegex = /^[ªº'\p{L}\s-]+$/u;
const homeNumberRegex = /^[a-zA-Z0-9/]+$/;

const addressValidator = {
  store: [
    body('address[0].zipCode').trim().notEmpty().withMessage('O campo \'CEP\' é obrigatório.').bail()
      .isLength({ min: 8, max: 8 }).withMessage('O campo \'CEP\' deve conter 8 dígitos').bail()
      .matches(zipCodeRegex).withMessage('O campo \'CEP\' só pode conter números'),

    body('address[0].country').notEmpty().withMessage('O campo País é obrigatório.')
      .bail().isLength({ max: 50 }).withMessage('O campo País permite até 50 caracteres.'),

    body('address[0].city').trim().notEmpty().withMessage('O campo \'cidade\' é obrigatório.').bail()
      .isLength({ max: 50 }).withMessage('O campo \'cidade\' deve possuir no máximo 50 caracteres.').bail()
      .matches(cityRegex).withMessage('O campo \'cidade\' só pode conter letras e os caracteres especiais \'ª\', \'º\', \'‘\' e \'-\'.'),

    body('address[0].state').trim().notEmpty().withMessage('O campo \'estado\' é obrigatório.').bail()
      .isLength({ max: 2, min: 2 }).withMessage('O campo \'estado\' deve possuir 2 caracteres.').bail()
      .matches(stateRegex).withMessage('O campo \'estado\' só pode conter letras maiúsculas'),

    body('address[0].district').trim().notEmpty().withMessage('O campo \'bairro\' é obrigatório.').bail()
      .isLength({ max: 50 }).withMessage('O campo \'bairro\' deve possuir no máximo 50 caracteres.').bail()
      .matches(addressRegex).withMessage('O campo \'bairro\' só pode conter letras, números e os caracteres especiais \'ª\', \'º\', \'‘\' e \'-\''),

    body('address[0].street').trim().notEmpty().withMessage('O campo \'logradouro\' é obrigatório.').bail()
      .isLength({ max: 80 }).withMessage('O campo \'logradouro\' deve possuir no máximo 80 caracteres.').bail()
      .matches(addressRegex).withMessage('O campo \'logradouro\' só pode conter letras, números e os caracteres especiais \'ª\', \'º\', \'‘\' e \'-\''),

    body('address[0].number').trim().notEmpty().withMessage('O campo \'número\' é obrigatório.').bail()
      .isLength({ max: 10 }).withMessage('O campo \'número\' deve possuir no máximo 10 caracteres.').bail()
      .matches(homeNumberRegex).withMessage('O campo \'número\' só pode conter letras, números e o caractere especial \'/\''),

    body('address[0].complement')
      .trim()
      .optional({ checkFalsy: true })
      .if(body('address[0].complement').exists())
      .isLength({ max: 80 }).withMessage('O campo \'complemento\' deve possuir no máximo 80 caracteres.').bail()
      .matches(addressRegex).withMessage('O campo \'complemento\' só pode conter letras, números e os caracteres especiais \'ª\', \'º\', \'‘\' e \'-\''),
  ],
};

module.exports = addressValidator;
