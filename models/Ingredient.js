let mongoose = require('mongoose');

let IngredientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 2,
        max: 100
    }
});

mongoose.model('Ingredient', IngredientSchema);