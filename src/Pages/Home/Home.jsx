import React from 'react';
import Footer from '../Layout/Footer/Footer';
import Header from '../Layout/Header/Header';
import ProductSection from './ProductSection/ProductSection';
import ReviewSection from './ReviewSection/ReviewSection';
import SiteInfo from './SiteInfo/SiteInfo';

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
            <ReviewSection></ReviewSection>
            <div className="px-28">

                <SiteInfo></SiteInfo>
            </div>

            {/* product grid  */}
            <Footer></Footer>
        </div>
    );
};

export default Home;