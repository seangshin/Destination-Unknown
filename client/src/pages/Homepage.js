import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';

import { useMutation } from '@apollo/client';
import { SAVE_LOCATION } from '../utils/mutations';

import Auth from '../utils/auth';
import { searchGooglePlaces } from '../utils/API';
//import { saveBookIds, getSavedBookIds } from '../utils/localStorage';

const SearchPlaces = () => {
  // create state for holding returned google api data
  const [searchedPlaces, setSearchedPlaces] = useState([]);
  // create state for holding our search field data
  const [searchInput, setSearchInput] = useState('');

  //const [saveLocation, { error }] = useMutation(SAVE_LOCATION);

  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();

  //   if (!searchInput) {
  //     return false;
  //   }

  //   try {
  //     const response = await searchGooglePlaces(searchInput);

  //     if (!response.ok) {
  //       throw new Error('something went wrong');
  //     }

  //     const { results } = await response.json();

      // const placeData = items.map((place) => ({
      //   locationId: location.place_id,
      //   lat: geometry.location.lat,
      //   lng: geometry.location.lng,
      //   placeName: name,
      //   photo: photos.photo_reference,
      // }));

  //     console.log(results);
  //     //setSearchedPlaces(placeData);
  //     setSearchInput('');
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

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
