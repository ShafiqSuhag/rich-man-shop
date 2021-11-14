import React from 'react';
import ReactStars from "react-rating-stars-component";
import { useHistory } from 'react-router';


const Product = (props) => {
    const history = useHistory()
    const handleBuyNow = (id) => {
        history.push("/checkout/" + id)
    }
    const { _id, name, image, price, description, rating } = props.product;

    // rating 
  
    const ratingConfig = {
        size: 30,
        value: rating,
        edit: false
    };
    return (

        <div class="py-6">
            <div class="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
                <div class="w-1/3 bg-cover" style={{ backgroundImage: `url(${image})` }}>
                </div>
                <div class="w-2/3 p-4">
                    <h1 class="text-gray-900 font-bold text-2xl">{name}</h1>
                    <p class="mt-2 text-gray-600 text-sm">{description ? description.substring(0, 200) : ""}</p>
                    <div class="flex item-center mt-2">
                        <ReactStars {...ratingConfig} />
                    </div>
                    <div class="flex item-center justify-between mt-3">
                        <h1 class="text-gray-700 font-bold text-xl">${price}</h1>
                        <button onClick={() => handleBuyNow(_id)} class="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;