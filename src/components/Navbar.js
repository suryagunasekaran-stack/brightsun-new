import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import sun from '../images/sun.svg'
import "../css/Navbar.css"
import broucherer from "../pdfs/BrightsunBrochure.pdf"

function NavigationBar() {

    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navmain');
        if (window.scrollY > 0) { 
            navbar.classList.add('fixed-navbar');
        } else {
            navbar.classList.remove('fixed-navbar');
        }
    });

    const openPdf = () => {
        window.open(broucherer, '_blank');
      }

    
    const { t, i18n } = useTranslation();


    const [expanded, setExpanded] = React.useState(false);

    const handleToggle = () => {
        setExpanded(!expanded);
    };

    const handleNavClick = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setExpanded(false); // collapse the navbar after clicking
    };

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <Navbar 
            className='p-3' 
            id='navmain' 
            expand="lg"
            expanded={expanded} 
            onToggle={handleToggle}
        >
            <Navbar.Brand href="#home">
                <img className='sunlogo' src={sun} alt="Brand Logo" />
            </Navbar.Brand>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link onClick={() => handleNavClick('aboutus')} href="#aboutus">{t('ab')}</Nav.Link>
                    <Nav.Link onClick={() => handleNavClick('facilities')} href="#facilities">{t('fac')}</Nav.Link>
                    <Nav.Link onClick={() => handleNavClick('contactus')} href="#contactus">{t('cu')}</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <div className='clickables'>
            <Button id='brou'  variant="danger" style={{margin:"2px"}} onClick={() => openPdf} >{t('b')}</Button>
            <button className='c' id="bbtn">{t('b')}</button> 

            <DropdownButton className='ml-auto' id="laa" title={t('laa')} >
                <Dropdown.Item onClick={() => {changeLanguage('en')}}>English</Dropdown.Item>
                <Dropdown.Item onClick={() => {changeLanguage('ja')}}>日本語</Dropdown.Item>
                <Dropdown.Item onClick={() => {changeLanguage('ta')}}>தமிழ்</Dropdown.Item>
                <Dropdown.Item onClick={() => {changeLanguage('ms')}}>melayu</Dropdown.Item>
                <Dropdown.Item onClick={() => {changeLanguage('zh')}}>中国人</Dropdown.Item>
            </DropdownButton>

        </div>
        </Navbar>
    );
}

export default NavigationBar;
