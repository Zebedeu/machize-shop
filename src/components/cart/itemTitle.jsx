import React from 'react';
import MyList from './mylist';

export default function ItemTitle({ value }) {
    const { cart } = value;
    return (
        <React.Fragment>
                {cart.map(item => {
                    return <MyList key={item.id} item={item} value={value} />;
                })}
        </React.Fragment>
    );
}
