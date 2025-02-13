const mongoose = require('mongoose');

const userSchema = {
  userId: { type: String, required: false },
  userLogin: { type: String, required: false },
};

const auditSchema = new mongoose.Schema({
  registrationDate: { type: String, required: false },
  registeredBy: userSchema,

  inactivationDate: { type: String, required: false },
  inactivatedBy: userSchema,

  updateDate: { type: String, required: false },
  updatedBy: userSchema,

  registrationNumber: { type: String, required: false },
});

module.exports = auditSchema;
