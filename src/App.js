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
import ExpandingGrid from './components/ExpandingGrid';
import Facilities from './components/Facilities';
import Worldwide from './components/Worldwide';
import WhatsAppWidget from './components/Whatsapp';
import ContactUs from './components/Contactus';
import Enginemaker from './components/Ticker';
import Map from './components/Worldwide2'


function App() {
    return (
        <div className="App">
            <NavigationBar />
            <LandingPage />
            <AboutUs />
            <VisionMission/>
            <Trust/>
            <ExpandingGrid/>
            <Facilities/>
            <ContactUs/>
            <WhatsAppWidget phoneNumber="+6592372289" message="Hi, I'm interested in your services" />
        </div>
    );
}

export default App;

