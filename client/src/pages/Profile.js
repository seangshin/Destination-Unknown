import React from 'react';
import { Jumbotron, Container, Button, Card, CardColumns } from 'react-bootstrap';
import { useQuery, useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { GET_ME } from '../utils/queries';
import { REMOVE_SEARCH } from '../utils/mutations';
import "../styles/profile.css";

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
          <h1>Saved Searches 🍽️</h1>
        </Container>
      </Jumbotron>
      <Container className='container-profile'>
        <h2 className='profileH2'>
          {userData.savedLocations.length
            ? `Viewing ${userData.savedLocations.length} saved ${userData.savedLocations.length === 1 ? 'searches' : 'searches'}:`
            : 'You have no saved searches!'}
        </h2>
        <CardColumns>
          {userData.savedLocations.map((restaurant) => {
            return (
              <Card key={restaurant.restaurantId} border='dark'>
                <Card.Img src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${restaurant.photo}&key=AIzaSyDEHGBibTeuDpUclYDLNXIAZ0J7NKWewJw`} alt={`The image for ${restaurant.restaurantName}`} variant='top' />
                <Card.Body className='text-center'>
                  <Card.Title className="cardtitle m-2">{restaurant.restaurantName}</Card.Title>
                  <Card.Subtitle className="cardprice  m-2">
                    <i className="fa-solid fa-wallet"></i> {`Restaurant Price: ${restaurant.priceLevel}`}
                  </Card.Subtitle>
                  <Card.Subtitle className="cardrating  m-2"><i className="fa-solid fa-certificate"></i> {`Rating: ${restaurant.rating}`}</Card.Subtitle>
                  <div className="d-flex">
                    <Button
                      className="btn-warning center delete-btn-css mt-3"
                      variant="secondary"
                      size="sm"
                      onClick={() =>handleDeleteSearch(restaurant.restaurantId)}>
                      Delete <i className="fa-solid fa-x"></i>
                    </Button>
                  </div>
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
