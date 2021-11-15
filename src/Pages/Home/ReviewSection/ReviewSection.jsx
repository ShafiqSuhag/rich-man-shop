import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import useServerConfig from '../../../hooks/useServerConfig';
import ReviewItem from './ReviewItem/ReviewItem';


const ReviewSection = () => {
    const serverUrl = useServerConfig()

    const [reveiwList, setReviewList] = useState([])

    useEffect(() => {
        // get review list  
        axios.get(serverUrl + '/reviews')
            .then(response => {

                console.log("review list - ", response)
                setReviewList(response.data.productList)
            })
    }, [])


    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return (
        <div className="mb-10 mt-5">
            <p className="my-10 text-4xl text-blue-400 text-center">Latest Review From Customers</p>
            {/* <div className="mx-28 my-20">
                <div className="grid grid-cols-2 gap-6  ">

                    <ReviewItem></ReviewItem>
                    <ReviewItem></ReviewItem>
                    <ReviewItem></ReviewItem>
                </div>
            </div> */}
            <div className="mx-3 lg:mx-48">
                <Carousel
                    swipeable={false}
                    draggable={false}
                    showDots={true}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={1000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerclassName="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}

                    dotListclassName="custom-dot-list-style"
                    itemclassName="carousel-item-padding-40-px"
                >
                    {
                        reveiwList.map((review, index) => <ReviewItem key={index} review={review}></ReviewItem>)
                    }

                    
                </Carousel>;
            </div>

        </div>
    );
};


export default ReviewSection;