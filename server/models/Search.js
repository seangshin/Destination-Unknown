const { Schema, model } = require('mongoose');

const restaurantSchema = require('./Restaurant')

const searchSchema = new Schema({
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

model.exports = searchSchema;