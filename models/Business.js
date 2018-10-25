let mongoose = require('mongoose');

let BusinessSchema = new mongoose.Schema({
    name: {type: String, required: true},
    address: String,
    postalCode: Number,
    city: String,
    country: String,
    phone: String,
    fax: String,
    businessKind: {type: String, required: true},
    vatNumber: String,
    website: String
}, {collection: 'Businesses'});

mongoose.model('Business', BusinessSchema)