import React, { useState, useEffect } from 'react'; 
import { Button, Card, Dropdown } from 'react-bootstrap';

export default function Searchcards() {
    const [category, setCategory] = useState('restaurants');
    const sampledata = [
        {
            category: "restaurants",
            title: "mama mia",
        },
        {
            category: "bars",
            title: "Dogs",
        },
        {
            category: "activities",
            title: "line dancing",
        },
        {
            category: "bars",
            title: "Y2K",
        },
        {
            category: "activities",
            title: "reading",
        },
        {
            category: "restaurants",
            title: "Latina Kitchen",
        },
        {
            category: "restaurants",
            title: "Cava",
        },
    ]; 
    const [data,setdata] = useState(sampledata); 
    const [filtereddata, setFilteredData] = useState([]); 

    useEffect(() =>{
    const copydata = [...data]
    const copiedfiltereddata =  copydata.filter((data)=>{
            return data.category === category
        })
        setFilteredData(copiedfiltereddata); 
    }, [category]);
    
    const handleSelect = (key) => {
    console.log(key);
   // setCategory();
    };

  return (
    <>
        <div class="text-center">
        <h2>Atlanta</h2>
        </div>

        <Dropdown onSelect={(key)=>handleSelect(key)}>
      <Dropdown.Toggle 
      variant="success" 
      id="dropdown-basic">
        Select Activity
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item key="restaurants">Restaurants</Dropdown.Item>
        <Dropdown.Item key="bars">Bars</Dropdown.Item>
        <Dropdown.Item key="activities">Activities</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

        {filtereddata.map((card)=>{
            return <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>
               {card.category}
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        })}
    </>
  )
}

