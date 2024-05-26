import React from 'react';
import Marquee from 'react-marquee-slider';
import times from 'lodash/times';
import ReviewCard from './ReviewCard';

const Reviews = () => (
    <div className="reviews-container" style={{height:'100vh'}} id='reviews'>
        <h1 id='user_review' style={{color:'aliceblue',textDecoration:'underline'}}>User Reviews</h1>
        <Marquee velocity={30} scatterRandomly minScale={0.5}>
            {times(6, String).map((id) => (
                <ReviewCard
                    key={`marquee-example-review-${id}`}
                    avatarSrc={`https://randomuser.me/api/portraits/men/${id}.jpg`}
                    reviewerName={`Anonymous User`}
                    reviewText={`It help me alot to get better price for my grains`}
                />
            ))}
        </Marquee>  
    </div>
);

export default Reviews;
