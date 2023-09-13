import React from 'react';
import { Fade } from 'react-reveal';
import heroImage from '../images/AdobeStock_375417808.jpeg'; // Replace with the path to your hero image
import { useTranslation } from 'react-i18next';

function LandingPage() {
    const { t } = useTranslation();
    return (
        
        <div className="d-flex align-items-center vh-100" style={{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="p-4 rounded shadow" style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
                            <h1 className="display-4" style={{ color: '#FF4500' }}><h1>{t('Welcome')}</h1></h1>
                            <p className="lead" style={{ color: '#00008B' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
                            </p>
                            <p>
                                <a href="#" className="btn btn-lg" style={{ backgroundColor: '#FF4500', color: '#00008B' }}>Learn more</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;

