import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import "../styles/herosection.css";


export default function Herosection() {
  return (
    <div className='hero-container'>
      <h1 className="main-htag"> ADVENTURE AWAITS</h1>
      <p>What are you waiting for to plan your next trip?</p>
      <Button 
      className='btn btn-light hero-button' 
      type="button" >
      <Link to='search'> GET STARTED </Link>
      </Button>
    </div>
  )
}
