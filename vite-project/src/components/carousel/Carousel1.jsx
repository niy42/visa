import { useEffect } from "react";
import { useState } from "react";
import "./carousel1.css";

function Carousel1({ images }) {
    const [current, setCurrent] = useState(null);
    const [autoPlay, setAutoPlay] = useState(true);
    let timeOut = null;

    useEffect(() => {
        timeOut =
            autoPlay &&
            setTimeout(() => {
                slideRight();
            }, 2500);
    });

    const slideRight = () => {
        setCurrent(current === images.length - 1 ? 0 : current + 1);
    };

    const slideLeft = () => {
        setCurrent(current === 0 ? images.length - 1 : current - 1);
    };
    console.log(current);
    return (
        <div
            className="carousel"
            onMouseEnter={() => {
                setAutoPlay(false);
                clearTimeout(timeOut);
            }}
            onMouseLeave={() => {
                setAutoPlay(true);
            }}
        >
            <div className="carousel_wrapper">
                {images.map((image, index) => {
                    return (
                        /* (condition) ? true : false */

                        <div
                            key={index}
                            className={
                                index == current
                                    ? "carousel_card carousel_card-active"
                                    : "carousel_card"
                            }
                        >
                            <img className="card_image" src={image.image} alt="" />
                            <div className="card_overlay">
                                <h2 className="card_title">{image.title}</h2>
                            </div>
                        </div>
                    );
                })}
                <div className="carousel_arrow-left" onClick={slideLeft}>
                    &lsaquo;
                </div>
                <div className="carousel_arrow-right" onClick={slideRight}>
                    &rsaquo;
                </div>
                <div className="carousel_pagination">
                    {images.map((_, index) => {
                        return (
                            <div
                                key={index}
                                className={
                                    index == current
                                        ? "pagination_dot pagination_dot-active"
                                        : "pagination_dot"
                                }
                                onClick={() => setCurrent(index)}
                            ></div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Carousel1;