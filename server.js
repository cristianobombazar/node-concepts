const express = require('express');
const mongoose = require('mongoose');

// STARTING  APP
const app = express();

// STARTING DB
mongoose.connect('mongodb://localhost:27017/nodeinit',
                 {useNewUrlParser: true}
);


// CREATING ROUTE
app.get('/', (req, res) => {
    res.send('Hello Rocketseat');
});


app.listen(3001);