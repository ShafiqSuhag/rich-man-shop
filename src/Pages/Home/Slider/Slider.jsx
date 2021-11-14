import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader




const sliders = [
    {
        img: "https://dummyimage.com/1200x400/000/fff",
        name: "slider 1"
    },
    {
        img: "https://dummyimage.com/1200x400/000/fff",
        name: "slider 2"
    },
    {
        img: "https://dummyimage.com/1200x400/000/fff",
        name: "slider 3"
    },
];

const Slider = () => {
    return (
        <div>
            <Carousel autoPlay showArrows={true} showThumbs={false} >
                {
                    sliders.map(slider => {
                        return (
                            <div>
                                <img src={slider.img} alt="" />
                                <p className="legend">{slider.name}</p>
                            </div>)
                    })
                }
            </Carousel>
        </div>
    );
};

export default Slider;