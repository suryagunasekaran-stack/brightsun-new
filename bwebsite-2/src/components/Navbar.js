import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Dropdown, DropdownButton } from 'react-bootstrap';

function NavigationBar() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    return (
        <Navbar  style={{ color: '#FF4500' }} expand="lg">
            <Navbar.Brand href="#home">Your Brand Name</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#aboutus">About Us</Nav.Link>
                    <Nav.Link href="#services">Services</Nav.Link>
                    <Nav.Link href="#contactus">Contact Us</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <div>
            <DropdownButton id="dropdown-basic-button" title="Language">
                <Dropdown.Item onClick={() => changeLanguage('en')}>EN</Dropdown.Item>
                <Dropdown.Item onClick={() => changeLanguage('ja')}>JA</Dropdown.Item>
                <Dropdown.Item onClick={() => changeLanguage('ta')}>TA</Dropdown.Item>
                <Dropdown.Item onClick={() => changeLanguage('ms')}>MS</Dropdown.Item>
                <Dropdown.Item onClick={() => changeLanguage('zh')}>ZH</Dropdown.Item>
            </DropdownButton>
        </div>
        </Navbar>
    );
}

export default NavigationBar;
