import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const GET_CITY = gql`
  mutation getCity($cityName: String!) {
    getCity(cityName: $cityName) {
      cityId
      cityName
      lat
      lng
      photo
      restaurants {
        restaurantId
        restaurantName
        priceLevel
        rating
        photo
      }
    }
  }
`;

export const SAVE_SEARCH = gql`
  mutation saveSearch($restaurantId: String!, $restaurantName: String!, $priceLevel: String!, $rating: String!, $photo: String) {
    saveSearch(restaurantId: $restaurantId, restaurantName: $restaurantName, priceLevel: $priceLevel, rating: $rating, photo: $photo) {
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

// export const REMOVE_BOOK = gql`
//   mutation removeBook($bookId: String!) {
//     removeBook(bookId: $bookId) {
//       _id
//       username
//       email
//       savedBooks {
//         bookId
//         authors
//         description
//         title
//         image
//       }
//     }
//   }
// `;
