import React from 'react';
import { Parallax } from 'react-parallax';
import "../css/VisionMission.css";
import { useTranslation } from 'react-i18next';


function VisionMission() {
    const { t } = useTranslation();
    return (
        <Parallax  strength={500} className="parallax-bg-image2">
            <div className='missionlength'>
                <div className="container h-100 d-flex align-items-center">
                    <div className="row">
                        <div className="col-md-8">
                            <h1>{t('ov')}</h1>
                            <p>
                            {t('v')}
                            </p>
                        </div>

                        <div className="col-md-8">
                            <h1>{t('om')}</h1>
                            <p>
                            {t('m')}
                            </p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </Parallax>
    );
}

export default VisionMission;