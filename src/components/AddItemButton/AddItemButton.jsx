import React from 'react';
import { Button } from 'react-bootstrap';
import { CartContext } from '../../context';


export const AddItemButton = ({ label = "Add to cart", quantity, resetQuantity }) => {
    const { itemCount, setItemCount } = React.useContext(CartContext);
    const manageAddCart = () => {
        setItemCount(itemCount + quantity);
        resetQuantity();
    };

    return (
        <Button onClick={manageAddCart} style={{ margin: "1rem 0.2rem 1rem 0.2rem" }}>{label}</Button>
    );
};
