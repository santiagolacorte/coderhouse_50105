import React from 'react';
import { useParams } from 'react-router-dom';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import ProductsData from '../data/ProductsData.json';

const Item = () => {
    const {id} = useParams();
    const productFiltered = ProductsData.filter(product => product.id == parseInt(id));

    return <ItemDetailContainer product={productFiltered[0]} />;
};

export default Item;
