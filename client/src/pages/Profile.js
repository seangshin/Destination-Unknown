import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';

import { useQuery, useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { GET_ME } from '../utils/queries';
import { REMOVE_SEARCH } from '../utils/mutations';

const Profile = () => {
  const { loading, data } = useQuery(GET_ME);
  const [removeSearch, { error }] = useMutation(REMOVE_SEARCH, {
    update(cache, { data: { removeSearch } }) {
      try {
        cache.writeQuery({
          query: GET_ME,
          data: { me: removeSearch },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const userData = data?.me || [];
  if (loading) {
    return <h2>LOADING...</h2>;
  }

  const handleDeleteSearch = async (restaurantId) => {
    console.log(restaurantId); //debug
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      // // Execute the REMOVE_SEARCH mutation using the removeSearch data
      const { data } = await removeSearch({ 
        variables:  { restaurantId },
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Jumbotron fluid className='text-light bg-dark'>
        <Container>
          <h1>Viewing saved searches!</h1>
        </Container>
      </Jumbotron>
      <Container>
        <h2>
          {userData.savedLocations.length
            ? `Viewing ${userData.savedLocations.length} saved ${userData.savedLocations.length === 1 ? 'searches' : 'searches'}:`
            : 'You have no saved searches!'}
        </h2>
        <CardColumns>
          {userData.savedLocations.map((restaurant) => {
            return (
              <Card key={restaurant.restaurantId} border='dark'>
                <Card.Img src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${restaurant.photo}&key=AIzaSyDEHGBibTeuDpUclYDLNXIAZ0J7NKWewJw`} alt={`The image for ${restaurant.restaurantName}`} variant='top' />
                <Card.Body>
                  <Card.Title>{restaurant.restaurantName}</Card.Title>
                  <Card.Subtitle>{`Restaurant Price: ${restaurant.priceLevel} and Rating: ${restaurant.rating}`}</Card.Subtitle>
                  {/* <Card.Text>{restaurant.description}</Card.Text> */}
                  <Button className='btn-block btn-danger' onClick={() => handleDeleteSearch(restaurant.restaurantId)}>
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
}

  


export default Profile;