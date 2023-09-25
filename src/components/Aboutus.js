import React from 'react';
import { Parallax } from 'react-parallax';
import "../css/Aboutus.css";
import { useTranslation } from 'react-i18next';


function AboutUs() {
    const { t } = useTranslation();
    return (
        <Parallax   strength={500} className="parallax-bg-image">
            <div id="aboutus" className='aboutlength'>
                <div className="container h-100 d-flex align-items-center">
                    <div className="row">
                        <div className="col-md-8">
                            <h1>{t('ab')}</h1>
                            <p>
                            {t('abd')}
                            </p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </Parallax>
    );
}

export default AboutUs;
