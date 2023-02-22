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
      const check = cityName.includes(' ');
      let validatedCityName = cityName;
      if(check) {
        validatedCityName = cityName.replace(' ', '+');
      } else validatedCityName =cityName;

      const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${validatedCityName}&key=AIzaSyDEHGBibTeuDpUclYDLNXIAZ0J7NKWewJw`;
      const response1 = await axios(url);
      
      const cityResults = {
        cityId: response1.data.results[0].place_id,
        cityName: response1.data.results[0].formatted_address,
        lat: response1.data.results[0].geometry.location.lat,
        lng: response1.data.results[0].geometry.location.lng,
        photo: response1.data.results[0].photos[0].photo_reference || '',
      };

      const category = 'restaurant';//hardcode for restaurant
      const categorySearchUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=${category}&location=${cityResults.lat}%2C${cityResults.lng}&radius=1500&key=AIzaSyDEHGBibTeuDpUclYDLNXIAZ0J7NKWewJw`;
      const response2 = await axios(categorySearchUrl);
      const listings = response2.data.results;

      const restaurantResults = listings.map((restaurant) => {
        if (!restaurant.photos || !restaurant.photos[0]) {
          return null;
        }

        return {
          restaurantId: restaurant.place_id,
          restaurantName: restaurant.name,
          priceLevel: restaurant.price_level || '?',
          rating: restaurant.rating,
          photo: restaurant.photos[0].photo_reference || '',
        }
      });
      

      const results = {
        ...cityResults,
        restaurants: restaurantResults,
      }

      console.log(results);

      // return cityResults;
      return results;
    },

    saveSearch: async (parent, args, context) => {
      if (context.user) {
        //const { bookId, authors, description, title, image, link } = args;
        const user = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { savedLocations: args } },
          { new: true }
        );
        return user;
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    removeSearch: async (parent, args, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedLocations: { restaurantId: args.restaurantId } } },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;