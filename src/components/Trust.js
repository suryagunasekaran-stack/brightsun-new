import React from 'react';
import "../css/Trust.css";
import trust from "../images/truss.svg"
import { useTranslation } from 'react-i18next';


function Trust() {
    const { t } = useTranslation();
    return (
            <div className='trustlength'>
                <div className='containertrust'> </div>
                    <div className='contenttrust'>
                        <h1>{t('trust')}</h1>
                        <p>{t('t')}</p>
                    </div>

            </div>
    );
}

export default Trust;