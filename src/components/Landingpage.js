import React from 'react';
import heroImage from '../images/reworked.png'; // Replace with the path to your hero image
import { useTranslation } from 'react-i18next';
import "../css/Landingpage.css"
import biz from "../images/bizsafe-star-seeklogo.com.svg"

function LandingPage() {
    const { t } = useTranslation();
    const handleClickScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        
        <div className="d-flex align-items-center vh-100" id='backg' style={{ backgroundImage: `url(${heroImage})`}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <div className="textcontainer">
                           <h1 id='welcome'>{t('Welcome')}</h1>
                           <p id='welcome2'>
                           {t('Welcome2')}
                           </p>

                            <p>
                                <a href="#services"> <button className='servicebtn' onClick={() => handleClickScroll('services')} href="#services">{t('Our Services')} </button></a>
                                <a href="https://www.youtube.com/embed/vMrhQI7Tr78?rel=0" target="_BLANK" rel="noreferrer"><button className='servicebtn2'> {t('video')}</button></a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <img src={biz} alt="bizSafe Logo" className="biz" />
        </div>
    );
}

export default LandingPage;

