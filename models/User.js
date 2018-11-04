let mongoose = require('mongoose');
let crypto = require('crypto');
let jwt = require('jsonwebtoken');

let UserSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {
        type: String,
        lowercase: true,
        unique: true,
        required: true,
        validate: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    },
    business: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Business'
    },
    hash: String,
    salt: String
});

// Sets password in salt and hash
UserSchema.methods.setPassword = (password) => {
    this.salt = crypto.randomBytes(32).toString('hex');
    this.hash = crypto
        .pbkdf2Sync(password, this.salt, 10000, 64, 'sha512')
        .toString('hex');
};

// Returns true if password is valid
UserSchema.methods.validPassword = (password) => {
    let hash = crypto
        .pbkdf2Sync(password, this.salt, 10000, 64, 'sha512')
        .toString('hex');
    return this.hash === hash;
};

// Generates JSON web token
UserSchema.methods.generateJWT = () => {
    var today = new Date();
    var exp = new Date(today);
    exp.setDate(today.getDate() + 60);
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            exp: parseInt(exp.getTime() / 1000)
        },
        process.env.ALLY_BACKEND_SECRET
    );
};

mongoose.model('User', UserSchema);