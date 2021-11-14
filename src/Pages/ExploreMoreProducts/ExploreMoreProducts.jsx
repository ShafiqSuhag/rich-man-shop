import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Product from '../../components/Product/Product';
import useServerConfig from '../../hooks/useServerConfig';
import Footer from '../Layout/Footer/Footer';
import Header from '../Layout/Header/Header';


const ExploreMoreProducts = () => {

    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const serverUrl = useServerConfig()


    useEffect(() => {
        axios.get(serverUrl + "/products?size=100")
            .then(res => {
                console.log("Product data ", res)
                if (res.status === 200) {
                    setProducts(res.data.productList)
                }
            })
    }, [])

    return (
        <>
            <Header></Header>
            <div className="mx-5 lg:mx-48 ">
                <div className="bg-indigo-700   rounded">

                    <p className="text lg:text-3xl text-white my-5   px-2 py-3  lg:py-5 lg:px-5">Explore al prdocuts of RMS</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
                    {
                        products.map((product, index) => <Product key={index} product={product}></Product>)
                    }
                </div>
            </div>


            <Footer></Footer>
        </>
    );
};

export default ExploreMoreProducts;