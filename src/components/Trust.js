import React from 'react';
import { Parallax } from 'react-parallax';
import "../css/Trust.css";
import { useTranslation } from 'react-i18next';


function Trust() {
    const { t } = useTranslation();
    return (
        <Parallax  strength={500} className="parallax-bg-image3">
            <div className='trustlength'>
                <div className="container h-100 d-flex align-items-center">
                    <div className="row">
                        <div className="col-md-8">
                            <h1>{t('trust')}</h1>
                            <p>
                            {t('t')}
                            </p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </Parallax>
    );
}

export default Trust;