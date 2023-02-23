import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import "../styles/login.css";
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

export default function Login() {
    const [credentials, setUserCredentials] = useState({email: '', password: ''});
    const [login, {error}] = useMutation(LOGIN_USER);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserCredentials({ ...credentials, [name]: value });
    };

    const handleLogin = async (event) =>{
        event.preventDefault();

        // check if form has everything (as per react-bootstrap docs)
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        try {
            const {data} = await login({variables:{...credentials}});
            Auth.login(data.login.token)
        }
        catch(err){
            console.log(err);
        };

        setUserCredentials({
            email:'',
            password: '',
        })
    };

  return (
    <>
        <Form onSubmit={handleLogin} className="loginform">
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control 
            type="text" 
            name="email"
            value= {credentials.email}
            placeholder="Please enter an email." 
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
            Login
        </Button>
    </Form>  
    </>
  );
};
