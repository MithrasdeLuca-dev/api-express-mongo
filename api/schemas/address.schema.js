const beautifyUnique = require('mongoose-beautiful-unique-validation');
const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
	country: { type: String, required: false },
	zipCode: { type: String, required: false },
	city: { type: String, required: false },
	state: { type: String, required: false },
	district: { type: String, required: false },
	street: { type: String, required: false },
	number: { type: String, required: false },
	complement: { type: String, required: false },
});

addressSchema.plugin(beautifyUnique);

const Address = mongoose.model('Address', addressSchema);

module.exports = Address; 