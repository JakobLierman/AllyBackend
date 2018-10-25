let mongoose = require('mongoose');

let ProductSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: String,
    Ingredients: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Ingredient'
        }
    ],
    category: String
});

mongoose.model('Product', ProductSchema);