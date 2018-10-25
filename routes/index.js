var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/API', function (req, res, next) {
    res.send('Ally backend server is up and running.');
});

module.exports = router;
