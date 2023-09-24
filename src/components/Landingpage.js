import React from 'react';
import heroImage from '../images/reworked.png'; // Replace with the path to your hero image
import { useTranslation } from 'react-i18next';
import "../css/Landingpage.css"

function LandingPage() {
    const { t } = useTranslation();
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
                                <a href="#services"> <button className='servicebtn'>{t('Our Services')} </button></a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;

