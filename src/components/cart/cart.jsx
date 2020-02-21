import React, { Component } from 'react';
import Title from '../title';
import CartColumns from '../cart/cartcolumns';
import EmptyCart from './emptycart';
import { ProductConsumer } from '../context';
import CardList from './cartlist';
import CartTotal from './carttotal';

class Cart extends Component {
    state = {  }
    render() { 
        return ( 
            <section className="col-lg-12">
                <ProductConsumer>
                    {value => {
                        const {cart} = value;
                        if(cart.length > 0 ) {
                            return (
                                <React.Fragment>
                                    <Title name="You" title="Cart"/>
                                    <CartColumns />
                                    <CardList  value={value} />
                                    <CartTotal value={value}/>
                                </React.Fragment>
                
                            );
                        }else {
                            return <EmptyCart />
                        }
                    }}
                </ProductConsumer>
            </section>
         );
    }
}
 
export default Cart;