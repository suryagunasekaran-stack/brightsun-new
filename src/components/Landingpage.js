import React from 'react';
import backgroundVideo from '../videos/219.mp4';
import { useTranslation } from 'react-i18next';
import "../css/Landingpage.css"
import biz from "../images/bizsafe-star-seeklogo.com.svg"
import Enginemaker from './Ticker';

function LandingPage() {
    const { t } = useTranslation();
    const handleClickScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        
        <div className="video-container">
            
            <video autoPlay loop muted playsInline className="background-video">
                <source src={backgroundVideo} type="video/mp4" />
            </video>

            <div className="content">
                <h1 id='welcome'>{t('Welcome')} </h1>
                <h2 id='welcome2'>{t('Welcome2')}</h2>
                <p>
                    <button className='button-66' id='servicebtn' onClick={() => handleClickScroll('services')} href="#services">{t('Our Services')} </button>
                    <a href="https://www.youtube.com/embed/vMrhQI7Tr78?rel=0" target="_BLANK" rel="noreferrer"><button className='button-66' id='videobtn'> {t('video')}</button></a>
                </p>
            </div>

            <Enginemaker/>

        
            <div className="biz" >
                {/* <img src={biz} alt="bizSafe Logo" /> */}
            </div>
        </div>

    );
}

export default LandingPage;