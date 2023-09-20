import React from 'react';
import "../css/facilities.css";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { useTranslation } from 'react-i18next';
import img from "../images/background.jpeg"


function Facilities() {
    const { t } = useTranslation();
    const ref = useRef(null);
    const { scrollXProgress } = useScroll({ container: ref });
    return (
        <div className='facbackground'>

        <ul ref={ref} className='scrollul'>
          <li> </li>
          <li> </li>
          <li> </li>
          <li> </li>
          <li> </li>

        </ul>

      </div>
    );
}

export default Facilities;