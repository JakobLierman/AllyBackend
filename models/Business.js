let mongoose = require('mongoose');

let BusinessSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 2,
        max: 100
    },
    address: {
        streetAddress: String,
        postalCode: Number,
        city: String,
        country: String, // TODO: i18n-iso-countries
    },
    phone: String,
    fax: String,
    businessKind: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'business',
        required: true
    },
    vatNumber: String, // TODO: validate-vat
    website: {
        type: String,
        validate: /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
    },
    products: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'products',
        required: false
    }
}, {collection: 'Businesses'});

mongoose.model('Business', BusinessSchema);