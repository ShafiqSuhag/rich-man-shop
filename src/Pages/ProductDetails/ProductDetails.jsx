import React from 'react';
import {
    useParams
} from "react-router-dom";

const ProductDetails = () => {
    let { id } = useParams();
  
    return (
        <div>
            inside product details  <br></br>
            {id}
        </div>
    );
};

export default ProductDetails;