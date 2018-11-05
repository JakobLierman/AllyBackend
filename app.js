let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let mongoose = require('mongoose');
let i18n = require("i18n");
let passport = require("passport");

// Connect to database
mongoose.connect(
    process.env.ALLY_DATABASE || 'mongodb://localhost/allydb',
    {useNewUrlParser: true}
);
mongoose.set('useCreateIndex', true);

// Import models
require('./models/BusinessKind');
require('./models/Business');
require('./models/Product');
require('./models/Ingredient');
require('./models/Allergen');
require('./models/User');

// Import config
require('./config/passport');

// Routers
let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
let businessKindsRouter = require('./routes/businessKinds');
let businessesRouter = require('./routes/businesses');
let productsRouter = require('./routes/products');
let ingredientsRouter = require('./routes/ingredients');
let allergensRouter = require('./routes/allergens');

let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());

// Internationalization
i18n.configure({
    locales: ['en', 'nl'],
    cookie: 'langCookie',
    directory: __dirname + '/locales'
});
app.use(i18n.init);

// Routes
app.use('/API', indexRouter);
app.use('/API/users', usersRouter);
app.use('/API/businessKinds', businessKindsRouter);
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
    res.json(err.message);
});

module.exports = app;
