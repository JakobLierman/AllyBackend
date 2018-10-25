let mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
    username: {
        type: String,
        lowercase: true,
        unique: true,
        required: true
    },
    //hash: String,
    //salt: String,
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: {
        type: String,
        required: true,
        validator:
    },
    business: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Business'
    }
});

mongoose.model('User', UserSchema);