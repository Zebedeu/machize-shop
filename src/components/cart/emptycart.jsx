import React, { Component } from 'react';

class EmptyCart extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container mt-5">
                <div className="row">
                    <div className="col-10 mx-auto text-center text-title">
                        <h1>you cart is currenty empty</h1>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default EmptyCart;