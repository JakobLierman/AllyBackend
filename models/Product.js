let mongoose = require('mongoose');

let ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 2,
        max: 100
    },
    description: {
        type: String,
        required: true
    },
    ingredients: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Ingredient',
        required: true
    },
    category: String
});

mongoose.model('Product', ProductSchema);