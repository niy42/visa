import React, { useState, useEffect } from 'react';
import './carousel.css';

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [transformValue, setTransformValue] = useState(0);

    const handleSize = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth < 768) {
            setTransformValue(0); // No transform for mobile screens
        } else {
            setTransformValue(-currentIndex * 10); // Transform for desktop screens (adjusted to 100 for full slide width)
        }
    };

    useEffect(() => {
        const updateCarousel = () => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        };

        const interval = setInterval(updateCarousel, 2000);

        const handleResize = () => {
            handleSize();
        };

        handleSize(); // Initial call to handleSize

        window.addEventListener('resize', handleResize);

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', handleResize);
        };
    }, [images.length]);

    useEffect(() => {
        handleSize(); // Update transform value when currentIndex changes
    }, [currentIndex]);

    const slideLeft = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const slideRight = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div className='carousel_wrapper'>
            <div className='carousel'>
                <div className='carousel_card' style={{ transform: `translateX(${transformValue}%)` }}>
                    {images.map(({ image, title }, index) => (
                        <div
                            div key={index} className='carousel_item' style={{ display: index === currentIndex ? 'flex' : 'none' }}
                        >
                            <img className='carousel_image' src={image} alt='photo' />
                            <div className='card_overlay'>
                                <h2 className='card_title'>{title}</h2>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="carousel_arrow-left" onClick={slideLeft}>&lsaquo;</div>
                <div className="carousel_arrow-right" onClick={slideRight}>&rsaquo;</div>
                <div className="carousel_pagination">
                    {images.map((_, index) => (
                        <div
                            key={index}
                            className={`${index === currentIndex ? 'pagination_dot pagination_dot-active' : 'pagination_dot'}`}
                            onClick={() => setCurrentIndex(index)}
                        >
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Carousel;
