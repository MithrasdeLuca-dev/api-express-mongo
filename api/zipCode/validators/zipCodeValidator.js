const { body} = require('express-validator');

const zipCodeRegex = /^[0-9]+$/;

const createStudentValidator = {
  store: [
    body('zipCode').trim().notEmpty().withMessage('O campo "CEP" é obrigatório.')
      .matches(zipCodeRegex).withMessage('O campo "CEP" permite apenas números.')
      .isLength({ max: 8, min: 8 }).withMessage('O campo "CEP" deve possuir 8 dígitos.')
      .bail(),
  ],
};

module.exports = createStudentValidator;