import React, { useState } from 'react';
import '../css/Whatsapp.css';

const WhatsAppWidget = ({ phoneNumber, message }) => {
  const [hover, setHover] = useState(false);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div 
      className="whatsapp-widget" 
      onMouseEnter={() => setHover(true)} 
      onMouseLeave={() => setHover(false)}
    >
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/479px-WhatsApp.svg.png" 
          alt="WhatsApp"
          id='wht' 
        />
      </a>
      {hover && <div className="whatsapp-popup">Click to chat with us on WhatsApp!</div>}
    </div>
  );
};

export default WhatsAppWidget;
