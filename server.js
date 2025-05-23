const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();
const morgan = require('morgan');
const db = require('./db');
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
const movieRoutes = require('./Routes/movieRoutes')

app.use('/movies', movieRoutes);
console.log(app.get('env'));
app.listen(process.env.PORT, () => {
    console.log('Server has started...');
})