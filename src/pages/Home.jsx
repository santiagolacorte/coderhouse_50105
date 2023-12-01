import React from "react";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import ProductsData from "../data/ProductsData.json";

const Home = () => {
    return <ItemListContainer products={ProductsData}/>
};

export default Home;
