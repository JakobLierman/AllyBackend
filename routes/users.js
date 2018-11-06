let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let User = mongoose.model('User');
let passport = require('passport');

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
    // TODO

/* Register user. */

/* Log user in. */

/* Checks if email is already in use or invalid. */

// Param for getting user by id.

/* GET one user. */

/* PATCH user. */

/* DELETE user. */
});

module.exports = router;
