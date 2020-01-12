const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// STARTING  APP
const app = express();

// STARTING DB
mongoose.connect('mongodb://localhost:27017/nodeinit',
                 {useNewUrlParser: true}
);
requireDir('src/models');

//ROUTES
app.use('/api', require('./src/Routes'))

//SERVER
app.listen(3001);