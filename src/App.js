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
import { HashRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Redirect = ({ to }) => {
    useEffect(() => {
        window.location.href = to;
    }, [to]);

    return null;
};

function App() {
    return (
    <Router>
        <Routes>
          <Route path="/" element={
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
          } />
        <Route path="/MakersCert" element={<Redirect to="https://drive.google.com/file/d/15EX7zaxaUGK5VpNvy7MqO6QXW3OPl1sk/view?pli=1" />} />
        <Route path="/BrochureEnglish" element={<Redirect to="https://drive.google.com/file/d/1lvLB8cKll-MrAWLah8aAAxOFbsGggqGM/view" />} />
        <Route path="/BrochureJapan" element={<Redirect to="https://drive.google.com/file/d/1HIGMIOGfqWFnxK1hYFgNTDsA9CW3gu5y/view" />} />
        <Route path="/BusinessProfile" element={<Redirect to="https://drive.google.com/file/d/1ZqR4h7EJywn0nKAwovrfOATcgts4dgcE/view" />} />
        <Route path="/Video" element={<Redirect to="https://www.youtube.com/embed/vMrhQI7Tr78?rel=0"/>} />
      </Routes>
    </Router>
    );
}

export default App;

