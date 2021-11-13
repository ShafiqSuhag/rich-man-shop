import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useServerConfig from '../../hooks/useServerConfig';
import Footer from '../Layout/Footer/Footer';
import Header from '../Layout/Header/Header';
import CheckoutContactInfo from './CheckoutContactInfo/CheckoutContactInfo';
import ProductInfo from './ProductInfo/ProductInfo';


const Checkout = () => {
    const serverUrl = useServerConfig()
    let { id } = useParams();
    const [productDetails, setProductDetails] = useState({})
    console.log(id)


    useEffect(() => {
        fetch(serverUrl + '/product-details', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: id })
        })
            .then(response => response.json())
            .then(result => {
                console.log(result.data[0])
                setProductDetails(result.data[0])
            })
            .catch(err => console.log("add tour error - ", err));
    }, [id])
    return (

        <>
            <Header></Header>
            <div className="mx-28 my-20 ">
                <div className="grid grid-cols-2 gap-6  ">
                    <ProductInfo productDetails={productDetails}></ProductInfo>
                    <CheckoutContactInfo productDetails={productDetails} ></CheckoutContactInfo>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Checkout;