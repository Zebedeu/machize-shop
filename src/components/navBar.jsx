import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from './../logo.svg'

import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
import { ButtonContainer } from './button';
class NavBar extends Component {
    state = {  }
    render() { 
        return ( 
        <div>
        <nav className="navbar navbar-expand-sm  bg-primary navbar-dark px-sm-5">
            <Link to="/">
            <img src={logo} className="navbar-brand" />    
            </Link>
            <ul className="navbar-nav align-items-center">
                <li className="nav-item ml-5">
                <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item ml-5">
                <Link to="/details" className="nav-link">Details</Link>
                </li>
            </ul>
            <Link to="/cart" className="ml-auto">
                <ButtonContainer>
                <span>
                    <FontAwesomeIcon 
                    className="faIcons"
                     icon="cart-plus" />
                     My Cart

                </span>
                </ButtonContainer>
            </Link>
            </nav>            
        </div>
         );
    }
}

export default NavBar;