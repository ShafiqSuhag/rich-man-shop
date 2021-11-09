import React from 'react';
import ProductSection from './ProductSection/ProductSection';

const Home = () => {
    return (
        <div>
            {/* banner  */}
            <div>
                <img src="https://dummyimage.com/1200x400/000/fff" alt="" />
            </div>
            {/* banner  */}

            {/* product grid  */}
           <ProductSection></ProductSection>
            {/* product grid  */}

        </div>
    );
};

export default Home;