import React from 'react';
import "../css/Aboutus.css";
import { useTranslation } from 'react-i18next';


function AboutUs() {
    const { t } = useTranslation();
    return (
            <div className='aboutlength'>
                <div className='wrapperabout'>
                    <h1 className='aboutustitle'>{t('ab')}</h1>
                    <div className="flexContainerabout">
                        <div className="row1about">
                            <h3> Specializing in <span className='highlight'> marine engineering and ship repairs </span>,  we deliver <span className='highlight'> top-notch servicing, maintenance, and parts supply.</span> Count on us for <span className='highlight'>swift and reliable solutions,</span>  ensuring your vessels sail smoothly and efficiently. Your ship's <span className='highlight'> optimal performance </span> is our commitment at Brightsun.</h3>
                        </div>
                        <div className="row2about">
                            <ul className='custom-bullets'>
                            <li>
                                Established in 1998, Brightsun Marine provides specialized services in the Ship Repair sector. <br/> <br/>
                            </li>
                            <li>
                               By adapting a customer-centric focus, we have established a strong and proven track record in providing quality services with Safe working practice.<br/> <br/>
                            </li>
                            <li>
                               With our Anchorage of Trust, Experience, Knowledge and Commitment, We offer Afloat, Wharf Side, Inner Port, Outer Port & Voyage Repair Services in a more Innovative manner and a Competitive Price in line with the Current Market.
                            </li>

                            </ul>
                        </div>
                        <div className="row3about">
                        <h2>
                            <span className="quote"> A ship earns money only when she's at sea </span>
                        </h2>
                        </div>

                    </div>
                </div>                      
            </div>
    );
}

export default AboutUs;
