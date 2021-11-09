import React from 'react';
import { useHistory, useParams } from "react-router-dom";

const ProductDetails = () => {
    let { id } = useParams();
    const history = useHistory()
    const handlePurchaseButton = () => {
        history.push('/checkout')
    }
    return (
        <div>
            inside product details  <br></br>
            {id}
            <button onClick={handlePurchaseButton}>Purchase Now </button>
        </div>
    );
};

export default ProductDetails;