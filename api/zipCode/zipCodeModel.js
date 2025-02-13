
const mongoose = require('mongoose');

const zipCodeSchema = new mongoose.Schema({
  zipCode: { type: String, required: true },
});

const ZipCode = mongoose.model('ZipCode', zipCodeSchema );
module.exports = ZipCode; 