let mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
    username: {
        type: String,
        lowercase: true,
        unique: true,
        required: true,
        min: 4,
        max: 35
    },
    //hash: String,
    //salt: String,
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {
        type: String,
        required: true,
        validate: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    },
    business: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Business'
    }
});

mongoose.model('User', UserSchema);