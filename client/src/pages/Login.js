import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  const handleSubmit = (e) => {
    e.preventDefault()
    let errorMessage = '';
    if (!email){
      errorMessage = errorMessage + ' A valid email is required.';
    }
    if (!password){
      errorPassword = errorMessage + ' A password is required.';
    }
    if (errorMessage){
      setError(errorMessage);
    }
    }; 
    handleSubmit(e);
}

export default function Login() {
  return (
    <div className='color-overlay d-flex justify-content-center align-items-center'>
     <Form className='rounded p-4 p-sm-3' onSubmit={handleSubmit}>
        <Form.Group className='mb-3 controlID="formEmail'>
        <Form.label className=''>Email</Form.label>
        <Form.input type='text' name ='email' value= {email} onChange={(e)=> setEmail(e.target.value)}></Form.input>
        <Form.Control type='email' placeholder='Enter your email address' />
        <Form.Text className="text-muted"> We'll never share your email with anyone else!</form.Text>
        </Form.Group>
        <Form.Group className='mb-3 controlID="formPassword'>
        <Form.Label>Password</Form.Label>
        <Form.Control type='password' placeholder='Enter your password' />
        <Form.input type='text' name ='password' value= {password} onBlur={handleBlur} onChange={(e)=> setPassword(e.target.value)}></Form.input>
        </Form.Group>
        <Form.Group className='mb-3 controlID="formcheckmark'>s
          <Form.Check type='checkbox' label='Remember Me' />
        </Form.Group>
        <Button vaariant='login-button' type='submit'>
            Log-in
        </Button>
    </Form>
    </div>
  )
}

