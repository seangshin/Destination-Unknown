import React, { useState, useEffect } from 'react'; 
import { Button, Card, Dropdown } from 'react-bootstrap';

export default function Searchcards() {
    const [category, setCategory] = useState('restaurants');
    const sampledata = [
        {
            id:1, 
            category: "restaurants",
            title: "mama mia",
            cost:"$",
            rating:"4.2",
            open_now: true,
            description: "blah blak blah",
            img:"https://cdn.vox-cdn.com/thumbor/5d_RtADj8ncnVqh-afV3mU-XQv0=/0x0:1600x1067/1200x900/filters:focal(672x406:928x662)/cdn.vox-cdn.com/uploads/chorus_image/image/57698831/51951042270_78ea1e8590_h.7.jpg"  
        },
        {
            id:2, 
            category: "bars",
            title: "Dogs",
            cost:"$",
            rating:"2.8",
            open_now: true,
            img:"https://cdn.vox-cdn.com/thumbor/5d_RtADj8ncnVqh-afV3mU-XQv0=/0x0:1600x1067/1200x900/filters:focal(672x406:928x662)/cdn.vox-cdn.com/uploads/chorus_image/image/57698831/51951042270_78ea1e8590_h.7.jpg" 

        },
        {
            id:3, 
            category: "activities",
            title: "line dancing",
            cost:"$",
            rating:"4.3",
            open_now: false,
            img:"https://cdn.vox-cdn.com/thumbor/5d_RtADj8ncnVqh-afV3mU-XQv0=/0x0:1600x1067/1200x900/filters:focal(672x406:928x662)/cdn.vox-cdn.com/uploads/chorus_image/image/57698831/51951042270_78ea1e8590_h.7.jpg" 
        },
        {
            id:4, 
            category: "bars",
            title: "Y2K",
            cost:"$",
            rating:"3.5",
            open_now: false,
            img:"https://cdn.vox-cdn.com/thumbor/5d_RtADj8ncnVqh-afV3mU-XQv0=/0x0:1600x1067/1200x900/filters:focal(672x406:928x662)/cdn.vox-cdn.com/uploads/chorus_image/image/57698831/51951042270_78ea1e8590_h.7.jpg" 
        },
        {
            id: 5,
            category: "restaurants",
            title: "reading",
            cost:"$",
            rating:"4.2",
            open_now: true,
            img:"https://cdn.vox-cdn.com/thumbor/5d_RtADj8ncnVqh-afV3mU-XQv0=/0x0:1600x1067/1200x900/filters:focal(672x406:928x662)/cdn.vox-cdn.com/uploads/chorus_image/image/57698831/51951042270_78ea1e8590_h.7.jpg" 
        },
        {
            id:6,
            category: "restaurants",
            title: "Latina Kitchen",
            cost:"$",
            rating:"4.2",
            open_now: true,
            img:"https://cdn.vox-cdn.com/thumbor/5d_RtADj8ncnVqh-afV3mU-XQv0=/0x0:1600x1067/1200x900/filters:focal(672x406:928x662)/cdn.vox-cdn.com/uploads/chorus_image/image/57698831/51951042270_78ea1e8590_h.7.jpg" 
        },
        {
            id:7,
            category: "restaurants",
            title: "Cava",
            cost:"$",
            rating:"4.2",
            open_now: true,
            img:"https://cdn.vox-cdn.com/thumbor/5d_RtADj8ncnVqh-afV3mU-XQv0=/0x0:1600x1067/1200x900/filters:focal(672x406:928x662)/cdn.vox-cdn.com/uploads/chorus_image/image/57698831/51951042270_78ea1e8590_h.7.jpg" 
        },
    ]; 
    const [data,setdata] = useState(sampledata); 
    const [filtereddata, setFilteredData] = useState([]); 

    useEffect(() =>{
    const copydata = [...data]
    const copiedfiltereddata =  copydata.filter((data)=>{
        console.log(data);
            return data.category === category
        })
        setFilteredData(copiedfiltereddata); 
    }, [category]);
    
    const handleSelect = (eventkey) => {
    // console.log(eventkey);
    setCategory(eventkey);
    };

  return (
    <>
        <div class="text-center">
        <h2>Atlanta</h2>
        </div>

        {/* onClick={(key)=>handleSelect(key)} */}
        <Dropdown onSelect={handleSelect}>
      <Dropdown.Toggle 
      variant="success" 
      id="dropdown-basic">
        Select Activity
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item 
        eventKey="restaurants"
         >Restaurants</Dropdown.Item>
        <Dropdown.Item eventKey="bars">Bars</Dropdown.Item>
        <Dropdown.Item eventKey="activities">Activities</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

        {filtereddata.map((card)=>{
            return <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={card.img} />
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <Card.Title>{card.rating}</Card.Title>
              <Card.Title>{card.cost}</Card.Title>
              <Card.Text>
               {card.description}
              </Card.Text>
              <Button variant="primary">save</Button>
            </Card.Body>
          </Card>
        })}
    </>
  )
}

