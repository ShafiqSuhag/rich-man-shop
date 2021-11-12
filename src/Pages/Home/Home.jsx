import React from 'react';
import Footer from '../Layout/Footer/Footer';
import Header from '../Layout/Header/Header';
import ProductSection from './ProductSection/ProductSection';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <button class="btn btn-primary">primary</button> 

            {/* banner  */}
            <div>
                <img src="https://dummyimage.com/1200x400/000/fff" alt="" />
            </div>
            {/* banner  */}

            {/* product grid  */}
           <ProductSection></ProductSection>
            {/* product grid  */}
            <Footer></Footer>
        </div>
    );
};

export default Home;