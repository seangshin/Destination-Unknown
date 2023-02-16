import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export default function signup() {
    const [credentials, setUserCredentials] = useState({email: '', username: '', password: ''});

    //const [loginUser, {error}] = useMutation(CREATE_USER);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserCredentials({ ...credentials, [name]: value });
};

    const handleLoginSubmit = async (event) =>{
        event.preventDefault();

        const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    };

    console.log(credentials.email, credentials.password, credentials.username);

    // try {
    //    const {data} = await newUser({variables:{...userFormatData}});
       
    //    Auth.newuser(data.newuser.token)
    // }
    // catch(err){
    //     console.log(err);
    // };

    setUserCredentials({
        username:'',
        email: '',
        password: '',
    })
    };

  return (
    <>
        <Form onSubmit={handleLoginSubmit}>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control 
            type="username" 
            name="username"
            value= {credentials.username}
            placeholder="Please enter a username." 
            onChange={handleInputChange}
            />
        </Form.Group>
        <Form.Group controlId="formBasicEmail" >
            <Form.Label>Email address</Form.Label>
            <Form.Control 
            type="email" 
            name="email"
            value= {credentials.email}
            placeholder="Please enter a valid email."
            onChange={handleInputChange} />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
            type="password" 
            name="password"
            value= {credentials.password}
            placeholder="Password"  
            onChange={handleInputChange}/>
        </Form.Group>
        <Button variant="primary" type="submit">
            Sign Up
        </Button>
    </Form>     
    </>
  )
}
