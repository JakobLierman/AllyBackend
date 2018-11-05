let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let Ingredient = mongoose.model('Ingredient');

/* GET all ingredients. */
router.get('/', (req, res, next) => {
    let query = Ingredient.find()
        .populate('allergen')
        .populate('creator');
    query.exec((err, ingredients) => {
        if (err) return next(err);
        res.json(ingredients);
    })
});

/* POST ingredient. */
// TODO 🔑

// Param for getting ingredient by id
router.param('ingredientId', (req, res, next, id) => {
    let query = Ingredient.findById(id)
        .populate('allergen')
        .populate('creator');
    query.exec((err, ingredient) => {
        if (err) return next(err);
        if (!ingredient) return next(new Error('not found ' + id));
        req.ingredient = ingredient;
        return next();
    });
});

/* GET one ingredient. */
router.get('/:ingredientId', (req, res, next) => {
    res.json(req.ingredient);
});

/* PATCH ingredient */
// TODO 🔑

/* DELETE ingredient */
// TODO 🔑

module.exports = router;