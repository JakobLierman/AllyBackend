var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var i18n = require("i18n");

// Connect to database
mongoose.connect(
    process.env.ALLY_DATABASE || 'mongodb://localhost/allydb',
    {useNewUrlParser: true}
);

// Import models
require('./models/Business');
require('./models/Product');
require('./models/Ingredient');
require('./models/Allergen');
require('./models/User');

// Routers
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var businessesRouter = require('./routes/businesses');
var productsRouter = require('./routes/products');
var ingredientsRouter = require('./routes/ingredients');
var allergensRouter = require('./routes/allergens');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Internationalization
app.use(i18n.init);

// Routes
app.use('/API', indexRouter);
app.use('/API/users', usersRouter);
app.use('/API/businesses', businessesRouter);
app.use('/API/products', productsRouter);
app.use('/API/ingredients', ingredientsRouter);
app.use('/API/allergens', allergensRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
