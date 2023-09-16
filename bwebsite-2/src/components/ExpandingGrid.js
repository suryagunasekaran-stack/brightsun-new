// ExpandingGrid.js

import React, { useState } from 'react';
import { Flipper, Flipped } from 'react-flip-toolkit';
import '../css/ExpandingGrid.css';

const ExpandingGrid = () => {
  const [selected, setSelected] = useState(null);

  const items = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
    { id: 4, name: "Item 4" },
    // ... add more items if needed
  ];

  const handleClick = (id) => {
    setSelected(selected === id ? null : id);
  };

  return (
    <Flipper flipKey={selected}>
      <div className="grid">
        {items.map(item => (
          <Flipped key={item.id} flipId={item.id}>
            <div
              className={`grid-item ${selected === item.id ? 'expanded' : ''}`}
              onClick={() => handleClick(item.id)}
            >
              {item.name}
            </div>
          </Flipped>
        ))}
      </div>
    </Flipper>
  );
};

export default ExpandingGrid;
