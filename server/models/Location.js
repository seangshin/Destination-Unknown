const { Schema } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
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
