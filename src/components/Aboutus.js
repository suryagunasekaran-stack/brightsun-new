import React from 'react';
import "../css/Aboutus.css";
import { useTranslation, Trans } from 'react-i18next';


function AboutUs() {
    const { t } = useTranslation();
    return (
            <div className='aboutlength'>
                <div className='wrapperabout'>
                    <h1 className='aboutustitle'>{t('ab')}</h1>
                    <div className="flexContainerabout">
                        <div className="row1about">
                        <h3>
                            <Trans i18nKey="specialization">
                                <span className='highlight'></span>
                                <span className='highlight'></span>
                                <span className='highlight'></span>
                                <span className='highlight'></span>
                            </Trans>
                        </h3>
                        </div>
                        <div className="row2about">
                            <ul className='custom-bullets'>
                            <li>
                            {t('est1998')}<br/> <br/>
                            </li>
                            <li>
                            {t('adapting')}<br/> <br/>
                            </li>
                            <li>
                            {t('anchorage')}
                            </li>

                            </ul>
                        </div>
                        <div className="row3about">
                        <h2>
                            <span className="quote"> {t('qot')} </span>
                        </h2>
                        </div>

                    </div>
                </div>                      
            </div>
    );
}

export default AboutUs;
