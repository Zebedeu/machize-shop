import React, { Component } from 'react';
import {  Link } from "react-router-dom";
import { ButtonContainer } from './button';
import CartButton from './cart/cartbutton';
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
                <ButtonContainer className="btn btn-sm btn-info mr-4">
                <CartButton />
                </ButtonContainer>
            </Link>
            </nav>            
        </React.Fragment>
         );
    }
}

export default NavBar;