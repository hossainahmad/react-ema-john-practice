import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
        .then(Response => Response.json())
        .then(data => setProducts(data));
    }, [])

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product product={product}></Product>)
                }
            </div>
            <div className="cart-container">
                <h1>Cart </h1>
            </div>
        </div>
    );
};

export default Shop;