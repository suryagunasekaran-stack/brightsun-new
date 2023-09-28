import React from 'react';
import "../css/Trust.css";
import trust from "../images/truss.svg"
import { useTranslation } from 'react-i18next';


function Trust() {
    const { t } = useTranslation();
    return (
            <div className='trustlength'>
                <div className='containertrust'> </div>
                <img className='picturetrust' src={trust} alt="thepeople"/>
                    {/* <div className='content'>
                    <h1>{t('trust')}</h1>
                    </div> */}
                    {/* <p>{t('t')}</p> */}

            </div>
    );
}

export default Trust;