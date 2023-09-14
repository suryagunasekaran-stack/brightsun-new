import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import sun from '../images/sun.svg'
import { useState, useEffect } from 'react';

function NavigationBar() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    const [langIndex, setLangIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const [isCycling, setIsCycling] = useState(true);
    const languages = ['English', '日本語', 'தமிழ்', 'Melayu', '中国人']; // Assuming these are your language codes
    
    useEffect(() => {
        if (!isCycling) return; // If not cycling, exit early

        const interval = setInterval(() => {
            setIsVisible(false); // Hide content
            setTimeout(() => {
                setLangIndex((prevIndex) => (prevIndex + 1) % languages.length);
                setIsVisible(true); // Show content after changing language
            }, 1000); // Wait for 1 second (duration of the fade effect)
        }, 2000); // Change every 2 seconds, adjust as needed

        return () => clearInterval(interval);
    }, [langIndex, isCycling]);


    return (
        <Navbar bg='dark' variant='dark'   expand="lg">
            <Navbar.Brand href="#home">  <img src={sun} alt="Brand Logo" width="150" height="50" /> </Navbar.Brand>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                
                    <Nav.Link href="#aboutus">About Us</Nav.Link>
                    <Nav.Link href="#services">Services</Nav.Link>
                    <Nav.Link href="#contactus">Contact Us</Nav.Link>
                    <Button variant="outline-success"  >Brouchere</Button>
                </Nav>
            </Navbar.Collapse>
            <div>
            <DropdownButton id="dropdown-basic-button" title={languages[langIndex]} onClick={() => setIsCycling(false)} >
                <Dropdown.Item onClick={() => {changeLanguage('en'); setLangIndex(0);}}>EN</Dropdown.Item>
                <Dropdown.Item onClick={() => {changeLanguage('ja'); setLangIndex(1);}}>JA</Dropdown.Item>
                <Dropdown.Item onClick={() => {changeLanguage('ta'); setLangIndex(2);}}>TA</Dropdown.Item>
                <Dropdown.Item onClick={() => {changeLanguage('ms'); setLangIndex(3);}}>MS</Dropdown.Item>
                <Dropdown.Item onClick={() => {changeLanguage('zh'); setLangIndex(4);}}>ZH</Dropdown.Item>
            </DropdownButton>

        </div>
        </Navbar>
    );
}

export default NavigationBar;
