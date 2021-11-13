import React from 'react';
import ReviewItem from './ReviewItem/ReviewItem';

const ReviewSection = () => {
    return (
        <div>
            <p className="text-4xl text-blue-400 text-center">Latest Review From Customers</p>
            <div className="mx-28 my-20">
                <div className="grid grid-cols-2 gap-6  ">

                    <ReviewItem></ReviewItem>
                    <ReviewItem></ReviewItem>
                    <ReviewItem></ReviewItem>
                </div>
            </div>

        </div>
    );
};

export default ReviewSection;