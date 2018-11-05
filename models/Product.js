let mongoose = require('mongoose');

let ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 2,
        max: 100
    },
    description: String,
    ingredients: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Ingredient',
        required: true
    },
    category: String,
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Business',
        required: true
    }
});

mongoose.model('Product', ProductSchema);