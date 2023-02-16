import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export default function signup() {
    const [credentials, setUserCredentials] = useState({username: '', email: '', password: ''});

    //const [newUser, {error}] = useMutation(CREATE_USER);

    const handleInputChange = (event) => {
        event.preventDefault();
        console.log(event.target)
        const { name, value } = event.target;
        setUserCredentials({ ...credentials, [name]: value });

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    };
    console.log(email, password,username);
};

    const handleNewUserSubmit = async (event) =>{
        event.preventDefault();
    try {
       const {data} = await newUser({variables:{...userFormatData}});
       
       Auth.newuser(data.newuser.token)
    }
    catch(err){
        console.log(err);
    };

    setUserCredentials({
        username:'',
        email: '',
        password: '',
    })
    };

   


  return (
    <>
        <Form onSubmit={handleNewUserSubmit}>
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
            placeholder="Please a valid email."
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
            Submit
        </Button>
    </Form>     
    </>
  )
}
