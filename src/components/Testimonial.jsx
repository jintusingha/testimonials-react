import React from 'react';
import Quote from '../assets/block-quote-svgrepo-com.svg';
import { reviews } from './reviewsData';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

const Testimonial = () => {
    return (
        <section className='testimonial-container'>
            <div className="title">
                <h1>Testimonial</h1>
                <p>What are members saying</p>
            </div>

            <div className="slider-container">
                <blockquote>
                    <img src={Quote} className='quote top-quote' alt="" />
                    <img src={Quote} className='quote bottom-quote' alt="" />
                </blockquote>

                <Splide options={{ perPage: 1,type:'loop',speed:2000}}>
                    {reviews.map((review) => (
                        <SplideSlide key={review.id}>
                            <img src={review.image} className='review-img' alt="" />
                            <div className="content">
                                <p className="text">{review.text}</p>
                                <div className="info">
                                    <div className="rating">
                                        <span className='star'>&#9733;</span>
                                        <span className='star'>&#9733;</span>
                                        <span className='star'>&#9733;</span>
                                        <span className='star'>&#9733;</span>
                                        <span className='star'>&#9733;</span>
                                    </div>
                                    <p className="user">{review.name}</p>
                                </div>
                            </div>
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </section>
    );
};

export default Testimonial;
