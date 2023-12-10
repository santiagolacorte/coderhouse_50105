import React from 'react';
import { Button } from 'react-bootstrap';
import { AddItemButton } from '../AddItemButton';

export const ItemQuantitySelector = () => {
    const [quantity, setQuantity] = React.useState(1);

    const manageAddProduct = () => {
        setQuantity(quantity + 1);
    };

    const manageSubsProduct = () => {
        if (quantity > 1) {
        setQuantity(quantity - 1);
        }
    };
    
    const resetQuantity = () => {
        setQuantity(1);
    };

    return (
        <div>
            <Button onClick={manageSubsProduct}>-</Button>
            <input type="number" value={quantity} disabled/>
            <Button onClick={manageAddProduct}>+</Button>
            <AddItemButton quantity={quantity} resetQuantity={resetQuantity}/>
        </div>
    );
};
