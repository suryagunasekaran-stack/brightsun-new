// ExpandingGrid.js

import React, { useState } from 'react';
import { Flipper, Flipped } from 'react-flip-toolkit';
import '../css/ExpandingGrid.css';
import img from "../images/background.jpeg"
import img2 from "../images/placeholder.jpeg"
import { useTranslation } from 'react-i18next';

const ExpandingGrid = () => {
  const [selected, setSelected] = useState(null);
  const { t } = useTranslation();

  const items = [
    { id: 1,
      name: t('eg'),
      imageUrl: img,
      description:  t('egd'),
      thumbnail: img2,
    },
    { id: 2,
      name: "Item 2",
      imageUrl: img,
      description: "This is a brief description of Item 1.",
      thumbnail: img2,
    },
    { id: 3,
      name: "Item 3",
      imageUrl: img,
      description: "This is a brief description of Item 1.",
      thumbnail: img2,
    },
        { id:   4,
      name: "Item 4",
      imageUrl: img,
      description: "This is a brief description of Item 1.",
      thumbnail: img2,
    },
    // ... add more items if needed ...
  ];

  const handleClick = (id) => {
    setSelected(selected === id ? null : id);
  };

  function renderDetailsForItem(item) {
    switch (item.id) {
      case 1:
        return (
          <>
            <h2> {t('eg')} </h2>
            <p> {t('egde')} </p>
          </>
        );
      case "Item 2":
        return (
          <>
            <h2>Details for Item 2</h2>
            <p>Specific content for Item 2...</p>
          </>
        );
      // ... add more cases for other items as needed ...
      default:
        return null;
    }
  }
  


  return (
    <Flipper className='mainflip' flipKey={selected}>
      <div className="grid">
      {items.map(item => (
  <div key={item.id} className="grid-item-wrapper">
    <Flipped flipId={`item-${item.id}-background`} translate opacity>
      <div
  className={`grid-item ${selected === item.id ? 'expanded' : ''}`}
  onClick={() => handleClick(item.id)}
  style={{ 
    backgroundImage: `url(${item.imageUrl})`,
    backgroundSize: selected === item.id ? '80%' : 'cover',
    backgroundRepeat: selected === item.id ? 'no-repeat' : 'repeat',
    backgroundPosition: selected === item.id ? 'top center' : 'center',
    backgroundColor: selected === item.id ? 'white' : '',
    backgroundPositionY: selected === item.id ? '25%' : '',
  }}
>
        {/* Always render the Portal, but conditionally display its content */}

          {selected === item.id && (
            <div className="expanded-content">
              {renderDetailsForItem(item)}
            </div>
          )}

      </div>
    </Flipped>
    <div className="item-info">
      <h3>{item.name}</h3>
      <p>{item.description}</p>
    </div>
  </div>
))}
      </div>
    </Flipper>
  );
};

export default ExpandingGrid;
