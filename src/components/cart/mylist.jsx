import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function MyList({ item, value }) {
    const { id, title, img, price, total, count } = item;
    return (
        <div>
            <li className="list-group-item d-flex justify-content-between lh-condensed">
                <h6 className="my-0">{title}</h6>
                <span className="text-muted">$ {price}</span>
                <span className="text-muted">Qty {count}</span>
                <img src={img} className="col-lg-3" alt="product" />
            </li>
        </div>

    );
}
