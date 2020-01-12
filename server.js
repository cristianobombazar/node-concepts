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

const product = mongoose.model('Product');


// CREATING ROUTE
app.get('/', (req, res) => {
    product.create({
        title: 'React Native',
        description: 'Build Native app with reactive',
        url: 'https://github.com/facebook/react-native'
    })
    return res.send('Hello Rocketseat');
});


app.listen(3001);