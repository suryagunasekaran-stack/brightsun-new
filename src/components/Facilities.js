import React, { useState } from 'react';
import '../css/facilities.css';
// Importing local images
import crane from "../images/Facilities/crane.JPG"
import forklift from "../images/Facilities/forklift.JPG"

const facilitiesData = [
  { image: crane, description: 'Crane' },
  { image: forklift, description: 'Description for image 2' },
];

const Facilities = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const handleLeftClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? facilitiesData.length - 1 : prevIndex - 1));
  };

  const handleRightClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === facilitiesData.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="facilities-container">
      <h1 id='titlefac'> Facilities </h1>
    <div className="facilities-content">
      <img src={facilitiesData[currentIndex].image} alt="Facility" className="facility-image" />
      <div className="description-box">
        <p>{facilitiesData[currentIndex].description}</p>
      </div>
    </div>
    <div className='btncontainer'>
      <button onClick={handleLeftClick} className="scroll-button left-button">{'<'}</button>
      <button onClick={handleRightClick} className="scroll-button right-button">{'>'}</button>
    </div>
  </div>
  
  );
};

export default Facilities;
