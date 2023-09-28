import React from 'react';
import "../css/VisionMission.css";
import { useTranslation } from 'react-i18next';
import workshop from "../images/plswork.svg"


function VisionMission() {
    const { t } = useTranslation();
    return (
            <div className='missionlength'>
                <div className="half-filled-rectangle"></div>
                <div className='imagebright'>
                    <img src={workshop} alt='brightsunworkshop'/>
                </div>
                <div className='mission'>
                    <h1>{t('ov')}</h1>
                    <p>{t('v')}</p>
                </div>
{/* 
                <div className='vision'>
                    <h1>{t('om')}</h1>
                    <p>{t('m')}</p>
                </div>

                <div className='trust'>
                    <h1>{t('trust')}</h1>
                    <p>{t('t')}</p>
                </div> */}
            </div>
    );
}

export default VisionMission;