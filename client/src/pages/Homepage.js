import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';
import "../styles/mainpage.css";

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

    try {
      const response = await getCity({
        variables: { cityName: searchInput},
      });

      const results = response.data.getCity.restaurants;
      setRestaurants([]); //clear array
      setRestaurants([...results]);

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

    try {
      // // Execute the SAVE_SEARCH mutation 
      const { data } = await saveSearch({ 
        variables:  { ...restaurantsToSave },
      });
    } catch (err) {
      console.log(JSON.stringify(err, null, 2));
    }

  };

  useEffect(() => {}, [restaurants]);

  return (
    <>
    
      <Jumbotron fluid className='search-container-css'>
        <Container >
          <h1 className="searchtitle">Search for Local Restaurants!</h1> 
          <Form onSubmit={handleFormSubmit}>
            <Form.Row className="justify-content-md-center">
              <Col xs={12} md={6}>
                <Form.Control
                  className='text-center'
                  name='searchInput'
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  type='text'
                  size='lg'
                  placeholder='Search for a City, State, or Country'
                />
              </Col>
            </Form.Row>
            <Form.Row>
              <Col xs={12} md={12}>
                <Button type='submit' variant='success' 
                size='lg'
                className="searchbtn-home">
                <i className="fa-solid fa-thumbtack"></i> Search
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
                <Card key={restaurant.restaurantId} border='border-bottom border-warning' className="cardbody-css">
                  <Card.Img src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${restaurant.photo}&key=AIzaSyDEHGBibTeuDpUclYDLNXIAZ0J7NKWewJw`} alt={`The image for ${restaurant.restaurantName}`} variant='top' />
                  <Card.Body>
                    <Card.Title className="cardtitle">{restaurant.restaurantName}</Card.Title>
                    <Card.Subtitle className="cardprice">
                    <i className="fa-solid fa-wallet"></i> {`Restaurant Price: ${restaurant.priceLevel}`}
                    </Card.Subtitle>
                    <Card.Subtitle className="cardrating"><i className="fa-solid fa-certificate"></i> {`Rating: ${restaurant.rating}`}
                    </Card.Subtitle>
                    {Auth.loggedIn() && (
                    <Button 
                      className='btn-info center save-btn-css'
                      variant="secondary" size="sm"
                      onClick={() => handleSaveSearch(restaurant.restaurantId)}>
                       Save <i className="fa-solid fa-heart"></i>
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
