let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let Business = mongoose.model('Business');

/* GET businesses. */
router.get('/', (req, res, next) => {
    let query = Business.find()
        .populate({
            path: "products",
            populate: {
                path: "ingredients",
                populate: {path: "allergen"}
            }
        });
    query.exec((err, businesses) => {
        if (err) return next(err);
        res.json(businesses);
    });
});

/* POST business. */
router.post("/", /*auth, */(req, res, next) => {
    let business = new Business({
        name: req.body.name,
        address: req.body.address,
        phone: req.body.phone,
        fax: req.body.fax,
        businessKind: req.body.businessKind,
        vatNumber: req.body.vatNumber,
        website: req.body.website
    });
    business.products = [];
    business.save((err, business) => {
        if (err) return next(err);
        res.json(business);
    });
});

// Param for getting business by id
router.param("businessId", (req, res, next, id) => {
    let query = Business.findById(id)
        .populate({
            path: "products",
            populate: {
                path: "ingredients",
                populate: {path: "allergen"}
            }
        });
    query.exec((err, business) => {
        if (err) return next(err);
        if (!business) return next(new Error("not found " + id));
        req.business = business;
        return next();
    });
});

/* GET one business. */
router.get('/:businessId', (req, res, next, id) => {
    res.json(req.business);
});

/* PATCH business */
// TODO 🔑

/* DELETE business */
// TODO 🔑

module.exports = router;