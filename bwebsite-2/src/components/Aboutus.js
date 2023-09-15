import React from 'react';
import { Parallax } from 'react-parallax';
import aboutUsImage from '../images/AdobeStock_473182722.jpeg'; // Replace with the path to your about us image

function AboutUs() {
    return (
        <Parallax   strength={500}>
            <div style={{ height: '100vh' }}>
                <div className="container h-100 d-flex align-items-center">
                    <div className="row">
                        <div className="col-md-6">
                            <h2>About Us</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Parallax>
    );
}

export default AboutUs;
