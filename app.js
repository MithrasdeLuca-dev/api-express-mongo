const express = require('express');
const app = express();

require('./database/config');
require('dotenv').config();
app.use(express.json());
const port = process.env.PORT_BACKEND;

const userRouter = require('./api/router/userRouter');
const zipCode = require('./api/router/zipCodeRouter');
const companyRouter = require('./api/router/companyRouter');

app.get('/', (req, res) => res.send('Hello World!'));

app.use('/user', userRouter);
app.use('/company', companyRouter);
app.use('/zipcode', zipCode);

const LocalHttp = `http://localhost:${port}`;

app.listen(port, () => console.log(`Example app listening on port ${port}! ` + LocalHttp));

