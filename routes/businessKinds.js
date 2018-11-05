let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let BusinessKind = mongoose.model('BusinessKind');

/* GET all businessKinds. */
router.get('/', (req, res, next) => {
    let query = BusinessKind.find()
        .populate('businesses');
    query.exec((err, businessKinds) => {
        if (err) return next(err);
        res.json(businessKinds);
    });
    // TODO: i18n
});

// Param for getting businessKind by id
router.param("businessKindId", (req, res, next, id) => {
    let query = BusinessKind.findById(id)
        .populate('businesses');
    query.exec((err, businessKind) => {
        if (err) return next(err);
        if (!businessKind) return next(new Error("not found " + id));
        req.businessKind = businessKind;
        return next();
    });
});

/* GET one businessKind. */
router.get('/:businessKindId', (req, res, next) => {
    res.json(req.businessKind);
    // TODO: i18n
});

// BusinessKinds are pre-defined and cannot be deleted,
// altered or created using HTTP requests.

module.exports = router;