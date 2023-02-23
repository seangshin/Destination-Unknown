import React, { useState } from 'react';
import { Jumbotron, Container, Button, Card, CardColumns, Carousel } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import { GET_USERS } from '../utils/queries';
import "../styles/feed.css";

const Feed = () => {
  const { loading, data } = useQuery(GET_USERS);

  if (loading) {
    return <h2>LOADING...</h2>;
  }

  const usersData = data?.users || [];
  console.log(usersData);

  return (
    <>
    <Jumbotron fluid className='text-light bg-dark'>
        <Container>
          <h1>{usersData.length
      ? `Feed showing ${usersData.length} ${usersData.length === 1 ? ' post' : ' posts'}`
      : 'No users posts yet!'}</h1>
        </Container>
      </Jumbotron>
      
    <div>
      {usersData &&
        usersData.map((user) => (
          <Container key={user._id}>
            <h2>{user.username}</h2>
            <Carousel interval={null}>
              {user.savedLocations.map((location) => (
                <Carousel.Item key={location._id}>
                  <img
                    className="d-block w-100"
                    style={{ width: "200px", height: "400px", objectFit: "cover" }}
                    src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${location.photo}&key=AIzaSyDEHGBibTeuDpUclYDLNXIAZ0J7NKWewJw`}
                    alt={`The image for ${location.restaurantName}`}
                  />
                  <Carousel.Caption className='container-profile'>
                  <h3>{location.restaurantName}</h3>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </Container>
        ))}
    </div>
    
    </>
  );
}

  


export default Feed;
