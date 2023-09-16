import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import NavigationBar from './components/Navbar';
import LandingPage from './components/Landingpage';
import AboutUs from './components/Aboutus';
import React from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import VisionMission from './components/VisionMission';
import Trust from './components/Trust';


function App() {
    return (
        <div className="App">
            <NavigationBar />
            <div className="snap-container">
                <LandingPage />
                <AboutUs />
                <VisionMission/>
                <Trust/>
            </div>
        </div>
    );
}

export default App;

