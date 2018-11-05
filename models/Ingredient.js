let mongoose = require('mongoose');

let IngredientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 2,
        max: 100
    },
    allergen: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Allergen',
        required: false
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Business',
        required: true
    }
});

mongoose.model('Ingredient', IngredientSchema);