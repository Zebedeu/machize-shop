import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function CartButton (){
        return ( 
            <React.Fragment>
               <span>
                    <FontAwesomeIcon 
                    className="faIcons"
                     icon="cart-plus" />
                     My Cart
                </span> 
            </React.Fragment>
         );
    }
