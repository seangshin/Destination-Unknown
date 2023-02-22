const { Schema, model } = require('mongoose');

const restaurantSchema = new Schema({
    restaurantId: {
        type: String
    },
    restaurantName: {
        type: String
    },
    priceLevel: {
        type: String
    },
    rating: {
        type: String
    },
    photo: {
        type: String
    },
});

model.exports = restaurantSchema;