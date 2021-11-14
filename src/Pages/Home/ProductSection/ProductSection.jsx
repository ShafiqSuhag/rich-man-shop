import axios from "axios";
import React, { useEffect, useState } from 'react';
import Product from '../../../components/Product/Product';





const ProductSection = () => {
    const [products, setProducts] = useState([])

    const baseUrl = "http://localhost:5000"
    useEffect(() => {
        axios.get(baseUrl+"/products?size=6")
        .then(res => {
            console.log("Product data ", res)
            if(res.status===200){
                setProducts(res.data.productList)
            }
        })
    }, [])
    return (
        <div className="mx-28 my-20">
            <div className="grid grid-cols-3 gap-6  ">

                {/* product  */}
                {
                    products.map((product, index) => <Product key={index} product={product}></Product>)
                }
                
                {/* product  */}
            </div>
        </div>

    );
};

export default ProductSection;