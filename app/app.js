const express = require('express');
require('dotenv').config();

const app = express();
app.get('/', (req, res) => res.send('🚀 Hello from Dockerized Node App!'));

app.listen(process.env.PORT || 3000, () => console.log('App running...'));
