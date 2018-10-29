let mongoose = require('mongoose');

let BusinessSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 2,
        max: 100
    },
    address: String,
    postalCode: Number,
    city: String,
    country: String, // TODO: i18n-iso-countries
    phone: String,
    fax: String,
    businessKind: {type: String, required: true},
    vatNumber: String, // TODO: validate-vat
    website: {
        type: String,
        validate: /\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/
    },
    products: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'products',
        required: false
    }
}, {collection: 'Businesses'});

mongoose.model('Business', BusinessSchema);