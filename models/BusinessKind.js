let mongoose = require('mongoose');

let BusinessKindSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    businesses: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'businesses'
    }
});

mongoose.model('BusinessKind', BusinessKindSchema);