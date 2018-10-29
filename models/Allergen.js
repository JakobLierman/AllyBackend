let mongoose = require('mongoose');

let AllergenSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    img: {
        type: String,
        enum: [
            'almond',
            'celery',
            'crustaceans',
            'egg',
            'fish',
            'gluten',
            'lupin',
            'milk',
            'mollusc',
            'mustard',
            'peanut',
            'sesame',
            'soybean',
            'sulfide'
        ],
        required: true
    }
});

mongoose.model('Allergen', AllergenSchema);