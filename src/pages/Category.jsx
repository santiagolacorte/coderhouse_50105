import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import ProductsData from "../data/ProductsData.json";

const Category = () => {
    const { categoryId } = useParams();
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        setFilteredProducts(ProductsData.filter(
            (product) => product.category == categoryId
        ))
    }, [categoryId]);

    return <ItemListContainer products={filteredProducts} />;
};

export default Category;
