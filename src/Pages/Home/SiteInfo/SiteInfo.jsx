import React from 'react';
import { Link } from 'react-router-dom';

const SiteInfo = () => {
    return (
        <>

            <p className="my-10 text-4xl text-blue-400 text-center">Browse by category</p>
            <div className="grid grid-cos-1 lg:grid-cols-3 gap-4">
                <div class="card shadow-xl image-full">
                    <figure>
                        <img src="./images/men.jpg" alt="" />
                    </figure>
                    <div class="justify-end card-body">

                        <Link to="/"><h2 class="card-title">MEN'S Sneaker</h2></Link>
                    </div>
                </div>
                <div class="card shadow-xl image-full">
                    <figure>
                        <img src="./images/women.jpg" alt="" />
                    </figure>
                    <div class="justify-end card-body">
                         <Link to="/"><h2 class="card-title">WOMEN's Sneaker</h2></Link>
                    </div>
                </div>
                <div class="card shadow-xl image-full">
                    <figure>
                        <img src="./images/unisex.jpg" alt="" />
                    </figure>
                    <div class="justify-end card-body">
                         <Link to="/"><h2 class="card-title">UNISEX</h2></Link>
                    </div>
                </div>

            </div>
        </>
    );
};

export default SiteInfo;