const { Schema, model } = require('mongoose');

const citySchema = new Schema({
    cityId: {
        type: String,
    },
    cityName: {
        type: String,
    },
    lat: {
        type: String,  
    },
    lng: {
        type: String,
    },
    photo: {
        type: String,
    },
    restaurant: [restaurantSchema],     
});

model.exports = citySchema;