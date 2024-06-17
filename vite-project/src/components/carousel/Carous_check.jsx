import React, { useState } from 'react';
import './carousel.css';

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slideRight = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const slideLeft = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    return (
        <div className='carousel_wrapper'>
            <div className='carousel'>
                <div className='carousel_card' style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {images.map(({ image, title }, index) => (
                        <div key={index} className='carousel_card' style={{ display: index === currentIndex ? 'block' : 'none' }}>
                            <img className='carousel_image' src={image} alt='photo' />
                            <div className='card_overlay'>
                                <h2 className='card_title'>{title}</h2>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='carousel_arrow-left' onClick={slideLeft}>&lsaquo;</div>
                <div className='carousel_arrow-right' onClick={slideRight}>&rsaquo;</div>
            </div>
        </div>
    );
};

export default Carousel;
