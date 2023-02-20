import React, { useState } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';

import { useMutation } from '@apollo/client';

import Auth from '../utils/auth';
import { GET_CITY } from '../utils/mutations';
//import { saveBookIds, getSavedBookIds } from '../utils/localStorage';

const SearchPlaces = () => {
  // create state for holding returned google api data
  const [searchedPlaces, setSearchedPlaces] = useState([]);
  // create state for holding our search field data
  const [searchInput, setSearchInput] = useState('');
  const [currentCity, setCurrentCity] =useState([]);
  

  const [getCity, { error }] = useMutation(GET_CITY);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }

    console.log(searchInput);

    try {
      const response = await getCity({
        variables: { cityName: searchInput},
      });

      // const cityData = response.data.getCity.payload.map((city) => ({
      //   cityId: city.place_id,
      //   cityName: city.formatted_address,
      //   lat: city.geomentry.location.lat,
      //   lng: city.geomentry.location.lng,
      //   photo: city.photos.photo_reference || '',
      // }));

      //setCurrentCity(cityData);
      //console.log(JSON.stringify(cityData));
      //console.log(response.data.getCity.payload);
      console.log(response);
      //console.log(cityData);
    } catch (err) {
      console.log(JSON.stringify(err, null, 2));
    }
  };

  return (
    <>
      <Jumbotron fluid className='text-light bg-dark'>
        <Container>
          <h1>Search for Places!</h1>
          <Form>
          {/* <Form onSubmit={handleFormSubmit}> */}
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
    </>
  );
};

export default SearchPlaces;
