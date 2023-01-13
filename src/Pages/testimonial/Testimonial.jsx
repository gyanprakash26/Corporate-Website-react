import './testim.css';
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import user from "./user.png";
import "./testim.css"
export default function Testimonial() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="main" id='testimonial'>
      <Carousel.Item>
        <div className="feed d-flex">
          <img src={user} alt="user" ></img>
          <div className='t-review'>
            <h3>John Hennry</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, dolorem.</p></div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="feed d-flex">
          <img src={user} alt="user" ></img>
          <div className='t-review'>
            <h3>Sandeep Sing</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, dolorem.</p></div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="feed d-flex">
          <img src={user} alt="user" ></img>
          <div className='t-review'>
            <h3>Harsh Jain</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, dolorem.</p></div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}
