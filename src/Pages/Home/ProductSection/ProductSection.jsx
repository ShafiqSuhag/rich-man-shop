import React from 'react';
import Product from './Product/Product';

const Products = [
    {
        name: "product 1",
        image: "https://dummyimage.com/400x400/000/fff",
        shortDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, non.",
        price: 2,
    },
    {
        name: "product 2",
        image: "https://dummyimage.com/400x400/000/fff",
        shortDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, non.",
        price: 20,
    },
    {
        name: "product 3",
        image: "https://dummyimage.com/400x400/000/fff",
        shortDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, non.",
        price: 50,
    },
    {
        name: "product 4",
        image: "https://dummyimage.com/400x400/000/fff",
        shortDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, non.",
        price: 20,
    },
    {
        name: "product 5",
        image: "https://dummyimage.com/400x400/000/fff",
        shortDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, non.",
        price: 100,
    },
    {
        name: "product 6",
        image: "https://dummyimage.com/400x400/000/fff",
        shortDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, non.",
        price: 5,
    },
]

const ProductSection = () => {
    return (
        <div class="grid grid-cols-3 gap-4">
            
            {/* product  */}
            {
                Products.map((product, index) => <Product key={index} product={product}></Product>)
            }
            {/* product  */}
        </div>
    );
};

export default ProductSection;