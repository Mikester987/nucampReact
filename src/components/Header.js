import {Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem } from 'reactstrap';
import NucampLogo from '../app/assets/img/logo.png';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [ menuOpen, setMenuOpen ] = useState(false);

    return (
        <Navbar dark color='primary' sticky='top' expand='md'>
          <NavbarBrand href='/'>
            <img src={NucampLogo} alt='nucamp logo' className='float-start' />
            <h1 className='m-1'>
                NuCamp
            </h1>
          </NavbarBrand>
          <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
          <Collapse isOpen={menuOpen} navbar>
          <Nav className='ms-auto' navbar>
              <NavItem className='nav-link' to='/'>
                  <i className='fa fa-home fa-lg' /> Home
              </NavItem>
              <NavItem className='nav-link' to='/directory'>
                  <i className='fa fa-list fa-lg' /> Directory
              </NavItem>
              <NavItem className='nav-link' to='/about'>
                  <i className='fa fa-info fa-lg' /> About:
              </NavItem>
              <NavItem className='nav-link' to='/contact'>
                  <i className='fa fa-address-card fa-lg' /> Contact
              </NavItem>
          </Nav>
          </Collapse>
      </Navbar>
    );
}

export default Header;