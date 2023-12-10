import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../../context';


export const CartWidgetComponent = () => {
    const { itemCount } = React.useContext(CartContext);
    const iconStyle = {
        fontSize: '1.25rem',
        paddingRight: '0.5rem'
    };

    return (
        <div>
            <FontAwesomeIcon style={iconStyle} icon={faCartShopping} />
            <span style={{fontSize: '1.25rem'}}>{itemCount}</span>
        </div>
    );
};
