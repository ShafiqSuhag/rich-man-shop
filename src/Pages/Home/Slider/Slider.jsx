import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader




const sliders = [
    {
        img: "./images/slider/s-1.jpg",
        name: ""
    },
    {
        img: "./images/slider/s-2.jpg",
        name: ""
    },
    {
        img: "./images/slider/s-3.jpg",
        name: ""
    },
    {
        img: "./images/slider/s-4.jpg",
        name: ""
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