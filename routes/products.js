let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let Product = mongoose.model('Product');

/* GET products. */
router.get('/', (req, res, next) => {
    let query = Product.find()
        .populate({
            path: "ingredients",
            populate: {path: "allergen"}
        });
    query.exec((err, ingredients) => {
        if (err) return next(err);
        res.json(ingredients);
    })
});

/* POST product. */
// TODO 🔑

// Param for getting product by id
router.param("productId", (req, res, next, id) => {
    let query = Product.findById(id)
        .populate({
            path: "ingredients",
            populate: {path: "allergen"}
        });
    query.exec((err, product) => {
        if (err) return next(err);
        if (!product) return next(new Error('not found ' + id));
        req.product = product;
        return next();
    });
});

/* GET one product. */
router.get('/:productId', (req, res, next) => {
    res.json(req.ingredient);
});

/* PATCH product */
// TODO 🔑

/* DELETE product */
// TODO 🔑

module.exports = router;