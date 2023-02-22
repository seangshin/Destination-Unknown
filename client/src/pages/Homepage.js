import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';

import { useMutation } from '@apollo/client';

import Auth from '../utils/auth';
//import { GET_CITY, GET_CATEGORY } from '../utils/mutations';
import { GET_CITY } from '../utils/mutations';
//import { saveBookIds, getSavedBookIds } from '../utils/localStorage';

const SearchPlaces = () => {
  // create state for holding our search field data
  const [searchInput, setSearchInput] = useState('');
  const [restaurants, setRestaurants] = useState('');
  const [getCity, { error }] = useMutation(GET_CITY);

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
      //setRestaurants(prevResults => [...prevResults, ...results]);
      setRestaurants([...results]);

      
      console.log(results);// debug
      //console.log(restaurants);

    } catch (err) {
      console.log(JSON.stringify(err, null, 2));
    }

    setSearchInput('');
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
                  Submit Search
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </Container>
      </Jumbotron>


      
      <Container>
        {/* <h2>
          {restaurants.length
            ? `Viewing ${restaurants.length} restaurants:`
            : 'Search for a city to see its restaurants'}
        </h2> */}

        {restaurants.length ? (
        <CardColumns>
          {restaurants.map((restaurant) => {

            if(restaurant) {
              return (
                <Card key={restaurant.restaurantId} border='dark'>
                  <Card.Img src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${restaurant.photo}&key=AIzaSyDEHGBibTeuDpUclYDLNXIAZ0J7NKWewJw`} alt={`The image for ${restaurant.restaurantName}`} variant='top' />
                  <Card.Body>
                    <Card.Title>{restaurant.restaurantName}</Card.Title>
                    <Card.Subtitle>{`Restaurant Price: ${restaurant.priceLevel} and Rating: ${restaurant.rating}`}</Card.Subtitle>
                    
                  </Card.Body>
                </Card>
              );
            } else return;
          })}
        </CardColumns>
        ) : (
          <p>No restaurants found.</p>
        )}
      </Container>

      
    </>
  );
};

export default SearchPlaces;
