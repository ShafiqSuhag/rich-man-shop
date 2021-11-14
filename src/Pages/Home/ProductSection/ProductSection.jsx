import axios from "axios";
import React, { useEffect, useState } from 'react';
import Product from '../../../components/Product/Product';
import useServerConfig from "../../../hooks/useServerConfig";





const ProductSection = () => {
    const serverUrl = useServerConfig()
    const [products, setProducts] = useState([])

    
    useEffect(() => {
        axios.get(serverUrl +"/products?size=6")
        .then(res => {
            console.log("Product data ", res)
            if(res.status===200){
                setProducts(res.data.productList)
            }
        })
    }, [])
    return (
        <div className="mx-5  lg:mx-28 lg:my-20">
            <div className="grid lg:grid-cols-3 gap-6  ">

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