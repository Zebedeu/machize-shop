import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from './../logo.svg'
import {  Link } from "react-router-dom";
import { ButtonContainer } from './button';
class NavBar extends Component {
    state = {  }
    render() { 
        return ( 
        <React.Fragment>
        <nav className="navbar navbar-expand-sm  bg-danger navbar-dark px-sm-5">
            <Link to="/">
            </Link>
            <ul className="navbar-nav align-items-center">
                <li className="nav-item ml-5">
                <Link to="/" className="nav-link">Home</Link>
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
        </React.Fragment>
         );
    }
}

export default NavBar;