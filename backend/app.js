const express = require('express');
const cors = require('cors');
const searchRoute = require('./routes/search');

const app = express();
app.use(cors());

app.get('/api/search', searchRoute);
