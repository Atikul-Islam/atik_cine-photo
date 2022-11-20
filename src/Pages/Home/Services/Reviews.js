import React from 'react';
import Review from './Review';

const Reviews = ({reviews}) => {
    return (
        <div>
            {
                reviews.length > 0 ?
                <h1 className='text-4xl text-center font-bold'>Reviews</h1>
                :
                <h1 className='text-center text-4xl font-bold'>No reviews here</h1>
            }
            {
                reviews?.map(review => <Review key={review._id} review ={review}></Review>)
            }
        </div>
    );
};

export default Reviews;