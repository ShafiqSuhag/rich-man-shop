import React from 'react';

const Product = (props) => {

    const { name, image, price, shortDescription } = props.product;
    return (
        <div class="card text-center shadow-2xl">
            <figure class="px-10 pt-10">
                <img src={image} class="rounded-xl" alt=""/>
            </figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p className="text-left">{shortDescription.substring(0, 200)}</p>
                <p className="text-2xl font-semibold my-5">
                    ${price}
                </p>
                <div class="justify-center card-actions">
                    <button class="btn btn-outline btn-accent">Details</button>
                </div>
            </div>
        </div>
        // <div className="bg-green-100">

        //     <p>
        //         {name}
        //     </p>
        //     <div className="rounded h-28">
        //         <img src={image} alt="" />
        //     </div>
        //     <p>
        //         {price}
        //     </p>
        //     <p>
        //         {shortDescription}
        //     </p>

        //     <NavLink to={`/product-details/${name}`} >Buy Now </NavLink>
        // </div>
    );
};

export default Product;