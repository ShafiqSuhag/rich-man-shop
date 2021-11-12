import React from 'react';
import Product from './Product/Product';

const Products = [
    {
        name: "This Is Trash",
        image: "https://static.nike.com/a/images/t_prod_sc/w_640,c_limit,f_auto/04af6997-0504-4865-81f1-ca12c5ebb6a0/space-hippie-03-volt-this-is-trash-release-date.jpg",
        shortDescription: "Space Hippie is a story of trash transformed. From the upper to the outsole, Space Hippie 03 is made from at least 45% recycled material by weight.       Its 'Space Waste Yarn' upper includes about 85% recycled polyester—made from recycled plastic bottles, T-shirts and yarn scraps—and uses a surplus FastFit tightening system to let you get in and go. A soft, Crater Foam midsole combines Nike Grind with a blend of foams for stability and a unique aesthetic, while the shoe's insole is made from ZoomX foam scraps, the same cushioning that creates the ultimate ride in Nike's NEXT% running shoes. We ditched the double box to deliver Space Hippie shoes in a single shoebox made from re-purposed material and printed on with a plant-based ink. It all adds up to one of our lowest carbon-footprint drops ever—the Nike Space Hippie Collection.",
        price: 150,
        gallaryImage: [
            "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/342b6577-fc32-4702-9418-92fc7f6702ea/space-hippie-03-volt-this-is-trash-release-date.jpg",
            "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/1806e717-716f-4967-8017-242301c31f31/space-hippie-03-volt-this-is-trash-release-date.jpg",
            "https://static.nike.com/a/images/t_prod_sc/w_640,c_limit,f_auto/04af6997-0504-4865-81f1-ca12c5ebb6a0/space-hippie-03-volt-this-is-trash-release-date.jpg"
        ]
    },

    {
        name: "LeBron 18 'Best 10–18'",
        image: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/2aa53825-84e3-45b8-a1ef-3a88da2afe39/lebron-18-best-10-18-basketball-shoe-lNnLfC.png",
        shortDescription: "When LeBron accelerates down the court, he produces tremendous force.The LeBron 18 is designed to harness his abilities while helping with the stress he puts on his body.Combined cushioning underfoot allows him to use his power for unstoppable bursts of speed.This eclectic colourway combines hues from some of the most renowned colourways throughout the history of The King's signature line.",
        price: 150,
        gallaryImage: [
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/a6a16748-97bd-4a6d-8fbb-388071605a4a/lebron-18-best-10-18-basketball-shoe-lNnLfC.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/dd33a269-9b6e-4eef-b1a3-12f3ecd037a6/lebron-18-best-10-18-basketball-shoe-lNnLfC.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/719aa123-64e0-43bf-b476-d074e7d6907a/lebron-18-best-10-18-basketball-shoe-lNnLfC.png"
        ]
    },

    {
        name: "Nike Air Max Plus 3",
        image: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/9c7e5ef9-3c60-4889-845e-eba937c5fa02/air-max-plus-3-shoes-xWcRWP.png",
        shortDescription: "Featuring the same Tuned Air technology as its predecessors, the Nike Air Max Plus 3 updates the iconic look with plastic accents fused to the upper while paying homage to the timeless colour fade of the OG classic",
        price: 235,
        gallaryImage: [
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/0989b3a1-8f7e-452b-9af8-fab4ba68c292/air-max-plus-3-shoes-xWcRWP.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/5ca7aec9-9fb5-4db6-b290-3b6683e163ff/air-max-plus-3-shoes-xWcRWP.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/904c47dd-8078-48a7-a206-aea0caeca722/air-max-plus-3-shoes-xWcRWP.png"
        ]
    },

]

const ProductSection = () => {
    return (
        <div className="mx-28 my-20">
            <div className="grid grid-cols-3 gap-6  ">

                {/* product  */}
                {
                    Products.map((product, index) => <Product key={index} product={product}></Product>)
                }
                {
                    Products.map((product, index) => <Product key={index} product={product}></Product>)
                }
                {/* product  */}
            </div>
        </div>

    );
};

export default ProductSection;