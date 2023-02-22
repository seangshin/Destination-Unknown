import { gql } from '@apollo/client';

export const GET_ME = gql`
  query me {
    me {
      _id
      username
      email
      savedLocations {
        restaurantId
        restaurantName
        priceLevel
        rating
        photo
      }
    }
  }
`;