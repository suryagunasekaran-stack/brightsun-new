import React from 'react';
import "../css/facilities.css";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { useTranslation } from 'react-i18next';
import img from '..//images/placeholder.jpeg'

function Facilities() {
    const { t } = useTranslation();
    const ref = useRef(null);
    const { scrollXProgress } = useScroll({ container: ref });
    return (
        <div id='facilities' className='facbackground'>
          <h1>{t('fac')}</h1>

        <ul ref={ref} className='scrollul'>
          <li>
            <img src={img} alt="Description" />
            <div>
              <p>Caption</p>
            </div>
          </li>
          <li>
            <img src={img} alt="Description" />
            <div>
              <p>Caption</p>
            </div>
          </li>
          <li>
            <img src={img} alt="Description" />
            <div>
              <p>Caption</p>
            </div>
          </li>
          <li>
            <img src={img} alt="Description" />
            <div>
              <p>Caption</p>
            </div>
          </li>

          <li>
            <img src={img} alt="Description" />
            <div>
              <p>Caption</p>
            </div>
          </li>

          <li>
            <img src={img} alt="Description" />
            <div>
              <p>Caption</p>
            </div>
          </li>

          <li>
            <img src={img} alt="Description" />
            <div>
              <p>Caption</p>
            </div>
          </li>
          <li>
            <img src={img} alt="Description" />
            <div>
              <p>Caption</p>
            </div>
          </li>
          <li>
            <img src={img} alt="Description" />
            <div>
              <p>Caption</p>
            </div>
          </li>
          
        </ul>
      </div>
    );
}

export default Facilities;