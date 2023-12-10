import React, { useEffect, useState } from 'react';

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
    const initialCart = JSON.parse(localStorage.getItem('cart'));
    const [itemCount, setItemCount] = useState(initialCart ? initialCart.itemCount : 0);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify({ itemCount }));
    }, [itemCount]);

    return (
        <CartContext.Provider value={{ itemCount, setItemCount }}>
            {children}
        </CartContext.Provider>
    );
};
