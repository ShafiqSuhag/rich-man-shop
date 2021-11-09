import React from 'react';
import { NavLink } from 'react-router-dom';

const Product = (props) => {
    
    const {name, image, price , shortDescription} = props.product ; 
    return (
        <div className="bg-green-100">
            
            <p>
                {name}
            </p>
            <img src={image} alt=""/>
            <p>
                {price}
            </p>
            <p>
              {shortDescription}  
            </p>
            
            <NavLink to={`/product-details/${name}`} >Buy Now </NavLink>
        </div>
    );
};

export default Product;