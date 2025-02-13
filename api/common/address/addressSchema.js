const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
  country: { type: String, required: false },
  zipCode: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  district: { type: String, required: true },
  street: { type: String, required: true },
  number: { type: String, required: false },
  complement: { type: String, required: false },
});

module.exports = addressSchema; 