// Portal.js

import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

const Portal = ({ children }) => {
  const elRef = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement('div');
  }

  useEffect(() => {
    const portalRoot = document.getElementById('portal');
    portalRoot.appendChild(elRef.current);
    return () => portalRoot.removeChild(elRef.current);
  }, []);

  return ReactDOM.createPortal(children, elRef.current);
};

export default Portal;
