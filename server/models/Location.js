const { Schema } = require('mongoose');


const locationSchema = new Schema({
  restaurantId: {
    type: String,
    //required: true,
  },
  restaurantName: {
    type: String,
    //required: true,
  },
  priceLevel: {
    type: String,
    //required: true,
  },
  rating: {
    type: String,
    //required: true,
  },
  photo: {
    type: String,
  },
});

module.exports = locationSchema;
