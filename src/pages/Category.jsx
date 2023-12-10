import React from "react";
import { useParams } from "react-router-dom";
import { ItemListContainer } from "../components";
import { useAllProductsByFilter } from "../hooks/useProducts";

export const Category = () => {
    const { categoryId } = useParams();
    const { products, loading, error } = useAllProductsByFilter("products", categoryId, "category");

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading products.</div>;
    }

    console.log("Fetched products: ", products); // Debugging line

    return <ItemListContainer products={products} />;
};
