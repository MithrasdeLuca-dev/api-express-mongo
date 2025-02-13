const auditSchema = require('../common/audit');
const mongoose = require('mongoose');

const userRegisterSchema = new mongoose.Schema({
  registration: { type: String, required: false },
  fullName: { type: String, required: true },
  mail: { type: String, required: true },
  password: { type: String, required: true },
  accessProfile: { type: String, required: true },
  status: { type: Boolean, required: true },
  audit: [auditSchema],
});

const User = mongoose.model('User', userRegisterSchema);
module.exports = User;