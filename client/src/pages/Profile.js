import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';

import { useMutation } from '@apollo/client';

import Auth from '../utils/auth';
//import { GET_CITY, GET_CATEGORY } from '../utils/mutations';

const Profile = () => {
  return (
    <>
    <Container>
      <h1>Welcome to My App</h1>
      <p>This is a sample page.</p>
    </Container>
     
    </>
  );
}

  


export default Profile;
