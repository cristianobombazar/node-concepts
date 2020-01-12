const mongoose = require('mongoose');
const product = mongoose.model('Product');

module.exports = {
    async index(req, res) {
        const products = await product.find();
        return res.json(products);
    },
    async indexByPage(req, res) {
        const {page= 1, limit} = req.query;
        const products = await product.paginate({}, {page, limit: 10});
        return res.json(products);
    },
    async show(req, res) {
        const productReturned = await product.findById(req.params.id);
        return res.json(productReturned);
    },
    async store(req, res) {
        const productSaved = await product.create(req.body);
        return res.json(productSaved);
    },
    async update(req, res) {
        const productSaved = await product.findByIdAndUpdate(req.params.id, req.body, {new: true}); // new true means that mongoose will return the row updated. if is false, mongoose will return row before was updated.
        return res.json(productSaved);
    },
    async destroy(req, res) {
        await product.findByIdAndDelete(req.params.id);
        return res.send();
    },
};