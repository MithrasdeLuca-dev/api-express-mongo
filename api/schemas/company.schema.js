const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
	corporateName: { type: String, required: false },
	registerCompany: { type: String, required: false },
	responsibleContact: { type: String, required: false },
	mail: { type: String, required: false },
	telephone: { type: String, required: false },
	serviceDescription: { type: String, required: false },
	matriz: { type: String, required: false },
	address: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Address'
	}
});

const Company = mongoose.model('Company', companySchema);

module.exports = Company; 