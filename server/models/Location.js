const { Schema } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const locationSchema = new Schema({
  cityId: {
    type: String,
    //required: true,
  },
  cityName: {
    type: String,
    //required: true,
  },
  lat: {
    type: String,
    //required: true,
  },
  lng: {
    type: String,
    //required: true,
  },
  photo: {
    type: String,
  },
});

//add restaurant 
module.exports = locationSchema;
