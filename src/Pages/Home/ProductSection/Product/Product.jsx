import React from 'react';
import { useHistory } from 'react-router';

const Product = (props) => {
    const history = useHistory()
    const handleBuyNow = (id) => {
        history.push("/checkout/" + id)
    }

    const { _id, name, image, price, description } = props.product;
    return (
        <div className="card text-center shadow-2xl">
            <figure className="px-10 pt-10">
                <img src={image} className="rounded-xl" alt="" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className="text-left">{description ?  description.substring(0, 200) : ""}</p>
                <p className="text-2xl font-semibold my-5">
                    ${price}
                </p>

                <div className="justify-center card-actions">
                    {/* <NavLink to={`/product-details/${name}`} className="btn btn-outline btn-accent" >Buy Now </NavLink> */}
                    <button
                        onClick={() => handleBuyNow(_id)}
                        data-modal-toggle="example"
                        data-modal-action="open"
                        className=" btn btn-outline btn-accent"
                    >

                        BUY NOW
                    </button>
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