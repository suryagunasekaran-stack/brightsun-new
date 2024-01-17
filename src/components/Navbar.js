import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import sun from '../images/sun.svg'
import "../css/Navbar.css"

function NavigationBar() {

    const shareableLink3 = 'https://drive.google.com/file/d/1HIGMIOGfqWFnxK1hYFgNTDsA9CW3gu5y/view?usp=sharing';
    const shareableLink2 = 'https://drive.google.com/file/d/1lvLB8cKll-MrAWLah8aAAxOFbsGggqGM/view?usp=sharing';
    const shareableLink = 'https://drive.google.com/file/d/1ZqR4h7EJywn0nKAwovrfOATcgts4dgcE/view?usp=share_link';
    const makercert = 'https://drive.google.com/file/d/1t9YljCfiAbL4Owgw8hkP-7fqDJND6U-q/view?usp=sharing';

    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navmain');
        if (window.scrollY > 0) { 
            navbar.classList.add('fixed-navbar');
        } else {
            navbar.classList.remove('fixed-navbar');
        }
    });

    const openPdf = () => {
        
        window.open(shareableLink2, '_blank');
      }

      const openPdfj = () => {
        
        window.open(shareableLink3, '_blank');

      }
    
      const openprofile = () => {
        
        window.open(shareableLink, '_blank');
      }

      const openmakers = () => {
        
        window.open(makercert, '_blank');
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

            <DropdownButton className='ml-auto' id="laa" title={t('d')} >
                <Dropdown.Item onClick={openPdf}> Brouchere </Dropdown.Item>
                <Dropdown.Item onClick={openPdfj} > Brouchere (Japanese) </Dropdown.Item>
                <Dropdown.Item onClick={openprofile} > Our Profile </Dropdown.Item>
                <Dropdown.Item onClick={openmakers} > Maker's Authorization Certificate </Dropdown.Item>
            </DropdownButton>

            <DropdownButton className='ml-auto' id="laa" title={t('laa')} >
                <Dropdown.Item onClick={() => {changeLanguage('en')}}>English</Dropdown.Item>
                <Dropdown.Item onClick={() => {changeLanguage('ja')}}>日本語</Dropdown.Item>
                <Dropdown.Item onClick={() => {changeLanguage('ta')}}>தமிழ்</Dropdown.Item>
                <Dropdown.Item onClick={() => {changeLanguage('ms')}}>melayu</Dropdown.Item>
                <Dropdown.Item onClick={() => {changeLanguage('zh')}}>中国人</Dropdown.Item>
                <Dropdown.Item onClick={() => {changeLanguage('hi')}}>हिंदी</Dropdown.Item>
                <Dropdown.Item onClick={() => {changeLanguage('kr')}}>한국인</Dropdown.Item>
            </DropdownButton>

        </div>
        </Navbar>
    );
}

export default NavigationBar;
