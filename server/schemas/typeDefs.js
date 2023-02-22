const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Search {
    cityId: String
    cityName: String
    lat: String
    lng: String
    photo: String
    restaurants: [Restaurant]
  }

  type Restaurant {
    restaurantId: String
    restaurantName: String
    priceLevel: String
    rating: String
    photo: String
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    getCity(cityName: String!): Search
  }
`;

module.exports = typeDefs;
