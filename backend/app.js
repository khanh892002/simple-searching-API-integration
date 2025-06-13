const express = require('express');
const cors = require('cors');
const searchRoute = require('./routes/search');
const PORT = 4000;
const app = express();
app.use(cors());

app.get('/search', searchRoute);

app.listen(PORT, () => {console.log(`Server is running on ${PORT}`);});