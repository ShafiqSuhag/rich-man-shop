import React from 'react';
import Footer from '../Layout/Footer/Footer';
import Header from '../Layout/Header/Header';
import ProductSection from './ProductSection/ProductSection';
import ReviewSection from './ReviewSection/ReviewSection';
import SiteInfo from './SiteInfo/SiteInfo';
import Slider from './Slider/Slider';

const Home = () => {
    return (
        <div>
            <div className="py-2  ">

                <Header ></Header>

            </div>

            <Slider></Slider>
            {/* banner  */}

            {/* banner  */}

            {/* product grid  */}
            <ProductSection></ProductSection>
            <ReviewSection></ReviewSection>
            <div className="px-5 lg:px-28">

                <SiteInfo></SiteInfo>
            </div>

            
            <Footer></Footer> 
        </div>
    );
};

export default Home;