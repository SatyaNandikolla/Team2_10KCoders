//rafc
import axios from "axios";
import React, { useEffect, useState } from "react";
export const UsersFunc = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        let FAKE_STORE_PRODUCTS_URL = "https://fakestoreapi.com/products";
        axios.get(FAKE_STORE_PRODUCTS_URL).then(({ data }) => {
            console.log(data);
            setProducts(data);
        });
    }, [])
    //useEffect(()=>{},[users])
    const handleDelete = (product) => {
        console.log(product)
        let balanceProducts = products.filter((prd) => prd.id !== product.id)
        setProducts(balanceProducts)
    };
    return (
        <div>
            <h2>Welcome To UsersFunc Component</h2>
            <ul>
                {products.map((product) => {
                    // return <li>{product.title}</li>
                    return (
                        <li>
                            <img src={product.image} alt="" />
                            <button onClick={() => { handleDelete(product); }}>Delete Product</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )

}