const mongoose = require('mongoose');
require('dotenv').config();

const DATABASE = process.env.DATABASE_URL;

mongoose.connect(`${DATABASE}`, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
	console.log('Database connection successful!!');
});

