import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export default function signup() {
    const [credentials, loginuser] = useState({username: '', password: ''});

    //const [LoginUser, {error}] = useMutation(LOGIN_USER);

    const handleInputChange = (event) => {
        event.preventDefault();
        console.log(event.target)
        const { name, value } = event.target;
        loginuser({ ...credentials, [name]: value });

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    };
    console.log(username, password);
};

    const handleLogin = async (event) =>{
        event.preventDefault();
    try {
       const {data} = await newUser({variables:{...userFormatData}});
       
       Auth.login(data.newuser.token)
    }
    catch(err){
        console.log(err);
    };

    loginuser({
        username:'',
        password: '',
    })
    };

  return (
    <>
        <Form onSubmit={handleLogin}>
        <Form.Group controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control 
            type="username" 
            name="username"
            value= {credentials.username}
            placeholder="Please enter a username." 
            onChange={handleInputChange}
            />
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
            Submit
        </Button>
    </Form>     
    </>
  )
}
