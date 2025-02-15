const express = require('express');
const routes = express.Router();

const productController = require('./controllers/ProductController');

routes.get('/products', productController.index);
routes.get('/products/pages/', productController.indexByPage);
routes.get('/products/:id', productController.show);
routes.post('/products', productController.store);
routes.put('/products/:id', productController.update);
routes.delete('/products/:id', productController.destroy);

module.exports = routes;