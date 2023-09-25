import React from 'react';
import './VerticalNav.css';

const VerticalNav = () => {
  const sections = [
    { id: 'about-us', icon: '🔗', name: 'About Us' },
    { id: 'vision-mission', icon: '🌐', name: 'Vision & Mission' },
    { id: 'services', icon: '🛠', name: 'Services' },
    { id: 'facilities', icon: '🏢', name: 'Facilities' },
    { id: 'contact-us', icon: '✉️', name: 'Contact Us' },
  ];

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="vertical-nav">
      {sections.map((section) => (
        <div key={section.id} className="nav-item">
          <div 
            className="nav-icon" 
            onClick={() => scrollToSection(section.id)}
          >
            {section.icon}
          </div>
          <div className="nav-label">{section.name}</div>
        </div>
      ))}
    </div>
  );
};

export default VerticalNav;
