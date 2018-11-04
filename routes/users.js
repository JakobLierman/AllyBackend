let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let User = mongoose.model('User');
let passport = require('passport');

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
    // TODO
});

module.exports = router;
