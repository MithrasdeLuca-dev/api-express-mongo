const mongoose = require('mongoose');
require('dotenv').config();

const username = process.env.DB_USER
const password = process.env.DB_PASSWORD
const host = process.env.DB_HOST
const port = process.env.DB_PORT
const database = process.env.DB_SCHEMA

console.log(port, host)

mongoose.connect(`mongodb://${username}:${password}@${host}:${port}`, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
	console.log("Database connection successful!!");
});

