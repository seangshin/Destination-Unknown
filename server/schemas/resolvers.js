const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');
const axios = require('axios');

const resolvers = {
  Query: {
    // Query to get the currently authenticated user
    me: async (parent, args, context) => {
      if (context.user) {
        // Find the authenticated user by their id and populate their saved books
        return User.findOne({ _id: context.user._id }).populate('savedBooks');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    // Mutation to add a new user
    addUser: async (parent, { username, email, password }) => {
      // Create a new user with the specified parameters
      const user = await User.create({ username, email, password });
      // Sign a new token for the user
      const token = signToken(user);
      // Return the token and the user
      return { token, user };
    },
    // Mutation to log in an existing user
    login: async (parent, { email, password }) => {
      // Find the user with the specified email
      const user = await User.findOne({ email });

      if (!user) {
        // If no user was found, throw an error
        throw new AuthenticationError('No user found with this email address');
      }

      // Check if the provided password is correct
      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        // If the password is incorrect, throw an error
        throw new AuthenticationError('Incorrect credentials');
      }

      // Sign a new token for the user
      const token = signToken(user);
      // Return the token and the user
      return { token, user };
    },

    getCity: async (parent, { cityName }) => {
      const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${cityName}&key=AIzaSyDEHGBibTeuDpUclYDLNXIAZ0J7NKWewJw`;
      const response = await axios(url);
      const results = JSON.stringify(response.data.results[0]);
      
      const payload = {
        cityId: response.data.results[0].place_id,
        cityName: response.data.results[0].formatted_address,
        lat: response.data.results[0].geometry.location.lat,
        lng: response.data.results[0].geometry.location.lng,
        photo: response.data.results[0].photos[0].photo_reference || '',
      };

      console.log(payload);
      // console.log(cityData);
      return payload;
    },
  },
};

module.exports = resolvers;