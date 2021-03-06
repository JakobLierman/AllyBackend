let passport = require('passport');
let LocalStrategy = require('passport-local').Strategy;
let mongoose = require('mongoose');
let User = mongoose.model('User');

passport.use(
    new LocalStrategy((email, password, done) => {
        User.findOne({email: email}, (err, user) => {
            if (err) return done(err);
            if (!user) return done(null, false, {message: 'Incorrect email.'}); // TODO: i18n
            if (!user.validPassword(password)) return done(null, false, {message: 'Incorrect password.'}); // TODO: i18n
            return done(null, user);
        });
    })
);

// TODO: Google login
// TODO: Facebook login