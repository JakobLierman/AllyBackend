var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
let User = mongoose.model('User');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.send('Ally backend server is up and running.');
});

module.exports = router;
