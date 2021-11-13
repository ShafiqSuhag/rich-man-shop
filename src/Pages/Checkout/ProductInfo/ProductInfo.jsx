import React from 'react';

const ProductInfo = (props) => {
    const {_id,image,  name, price, description} =props.productDetails
    return (
        <div className="flex  flex-col ">
            <div>
                <img className="rounded shadow-lg" src={image} alt=""/>
            </div>
            <p className="text-4xl text-indigo-500 text-left my-10">{name}</p>
            <div className="my-4 flext  items-center">
                <span className="px-5 py-2 border-l-2 border-gray-400 text-gray-500  rounded">PRICE</span>
                <span className="text-2xl ml-4"> ${price}</span>
            </div>
            <p className="text-gray-700">
               {description}
            </p>
            

        </div>
    );
};

export default ProductInfo;