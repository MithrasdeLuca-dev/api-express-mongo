const mongoose = require('mongoose');

const userRegisterSchema = new mongoose.Schema({
	registration: { type: String, required: false },
	fullName: { type: String, required: false },
	mail: { type: String, required: false },
	password: { type: String, required: false },
	accessProfile: { type: String, required: false },
	status: { type: Boolean, required: false },
	address: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Address'
	}

});

const User = mongoose.model('User', userRegisterSchema);

module.exports = User;