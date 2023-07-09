const mongoose = require('mongoose');
const express = require('express');
const app = express();
require('./database/config')

app.get('/', (req, res) => res.send('Hello World!'))

const LocalHttp = 'http://localhost:3010'

app.listen(3010, () => console.log('Example app listening on port 3010! ' + LocalHttp));

