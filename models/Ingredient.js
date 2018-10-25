let mongoose = require('mongoose');

let IngredientSchema = new mongoose.Schema({
    name: {type: String, required: true}
});

mongoose.model('Ingredient', IngredientSchema);