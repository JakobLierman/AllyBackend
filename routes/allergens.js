let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let Allergen = mongoose.model('Allergen');

/* GET allergens. */
router.get('/', (req, res, next) => {
    let query = Allergen.find();
    query.exec((err, allergens) => {
        if (err) return next(err);
        res.json(allergens);
    });
    // TODO: i18n
});

// Param for getting allergen by id
router.param("allergenId", (req, res, next, id) => {
    let query = Allergen.findById(id);
    query.exec((err, allergen) => {
        if (err) return next(err);
        if (!allergen) return next(new Error("not found " + id));
        req.allergen = allergen;
        return next();
    })
});

/* GET one allergen. */
router.get('/:allergenId', (req, res, next) => {
    res.json(req.allergen);
    // TODO: i18n
});

// Allergens are pre-defined and cannot be deleted,
// altered or created using HTTP requests.

module.exports = router;