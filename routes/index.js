let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let jwt = require('express-jwt');

// Auth secret
let auth = jwt({
    secret: process.env.ALLY_BACKEND_SECRET
});

/* GET home page. */
router.get('/', function (req, res, next) {
    res.send('Ally backend server is up and running.');
});

module.exports = router;
