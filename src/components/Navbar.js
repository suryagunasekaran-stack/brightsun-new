import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import sun from '../images/sun.svg'
import { useState, useEffect } from 'react';
import "../css/Navbar.css"

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
        <Navbar className='p-3' id='navmain' expand="lg">
            <Navbar.Brand href="#home">  <img className='sunlogo' src={sun} alt="Brand Logo"  /> </Navbar.Brand>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav"  />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                
                    <Nav.Link href="#aboutus" style={{paddingLeft:"100px", color:"#EA3431"}}  >{t('ab')}</Nav.Link>
                    <Nav.Link href="#services"  style={{color:"#EA3431"}}>{t('s')}</Nav.Link>
                    <Nav.Link href="#contactus" style={{paddingRight:"100px",  color:"#EA3431"}}  >{t('cu')}</Nav.Link>
                </Nav>
                
            </Navbar.Collapse>
            <div className='clickables'>
            <Button id='brou'  variant="danger" style={{margin:"2px"}} >{t('b')}</Button>
            <button className='c' id="bbtn">📄</button> 

            <DropdownButton className='ml-auto' variant='danger' id="dropdown-basic-button" title={languages[langIndex]} onClick={() => setIsCycling(false)} >
                <Dropdown.Item onClick={() => {changeLanguage('en'); setLangIndex(0);}}>EN</Dropdown.Item>
                <Dropdown.Item onClick={() => {changeLanguage('ja'); setLangIndex(1);}}>JA</Dropdown.Item>
                <Dropdown.Item onClick={() => {changeLanguage('ta'); setLangIndex(2);}}>TA</Dropdown.Item>
                <Dropdown.Item onClick={() => {changeLanguage('ms'); setLangIndex(3);}}>MS</Dropdown.Item>
                <Dropdown.Item onClick={() => {changeLanguage('zh'); setLangIndex(4);}}>ZH</Dropdown.Item>
            </DropdownButton>

            <DropdownButton className='c' id='extra' title = "🌐"  class='dropdown-toggle'>
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
