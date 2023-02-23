import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';

import { useMutation } from '@apollo/client';

import Auth from '../utils/auth';

import { GET_CITY, SAVE_SEARCH } from '../utils/mutations';


const SearchPlaces = () => {
  // create state for holding our search field data
  const [searchInput, setSearchInput] = useState('');
  const [restaurants, setRestaurants] = useState('');
  const [getCity, { error1 }] = useMutation(GET_CITY);
  const [saveSearch, { error2 }] = useMutation(SAVE_SEARCH);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }

    console.log(searchInput); // debug

    try {
      const response = await getCity({
        variables: { cityName: searchInput},
      });

      const results = response.data.getCity.restaurants;
      setRestaurants([]); //clear array
      setRestaurants([...results]);

      
      console.log(results);// debug
      console.log(restaurants);

    } catch (err) {
      console.log(JSON.stringify(err, null, 2));
    }

    setSearchInput('');
  };

  const handleSaveSearch = async (searchId) => {
    // find the restaurant in `restaurantsToSave` by the matching id
    const restaurantsToSave = restaurants.find((restaurant) => restaurant.restaurantId === searchId);

    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    console.log(restaurantsToSave);

    try {
      // // Execute the SAVE_SEARCH mutation 
      const { data } = await saveSearch({ 
        variables:  { ...restaurantsToSave },
      });
    } catch (err) {
      console.log(JSON.stringify(err, null, 2));
    }

  };

  useEffect(() => {
    console.log(restaurants);
  }, [restaurants]);

  return (
    <>
      <Jumbotron fluid className='text-light bg-dark'>
        <Container>
          <h1>Search for Places!</h1>
          <Form onSubmit={handleFormSubmit}>
            <Form.Row>
              <Col xs={12} md={8}>
                <Form.Control
                  name='searchInput'
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  type='text'
                  size='lg'
                  placeholder='Search for a place'
                />
              </Col>
              <Col xs={12} md={4}>
                <Button type='submit' variant='success' size='lg'>
                  Search
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </Container>
      </Jumbotron>


      
      <Container>
        {restaurants.length ? (
        <CardColumns>
          {restaurants.map((restaurant) => {

            if(restaurant && restaurant.restaurantId) {
              return (
                <Card key={restaurant.restaurantId} border='dark'>
                  <Card.Img src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${restaurant.photo}&key=AIzaSyDEHGBibTeuDpUclYDLNXIAZ0J7NKWewJw`} alt={`The image for ${restaurant.restaurantName}`} variant='top' />
                  <Card.Body>
                    <Card.Title>{restaurant.restaurantName}</Card.Title>
                    <Card.Subtitle>{`Restaurant Price: ${restaurant.priceLevel} and Rating: ${restaurant.rating}`}</Card.Subtitle>
                    {Auth.loggedIn() && (
                    <Button
                     
                      className='btn-block btn-info'
                      onClick={() => handleSaveSearch(restaurant.restaurantId)}>
                        Save
                      
                    </Button>
                  )}
                  </Card.Body>
                </Card>
              );
            } else return;
          })}
        </CardColumns>
        ) : (
          <div></div>
        )}
      </Container>

      
    </>
  );
};

export default SearchPlaces;
