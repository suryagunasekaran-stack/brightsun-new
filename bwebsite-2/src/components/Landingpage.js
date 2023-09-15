import React from 'react';
import { Fade } from 'react-reveal';
import heroImage from '../images/reworked.png'; // Replace with the path to your hero image
import { useTranslation } from 'react-i18next';
import "../css/Landingpage.css"

function LandingPage() {
    const { t } = useTranslation();
    return (
        
        <div className="d-flex align-items-center vh-100" style={{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <div className="textcontainer">
                           {t('Welcome')}
                            <p className="lead">
                            {t('Welcome2')}
                            </p>
                            <p>
                                <a href="#" className="btn btn-lg">Our Services</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;

