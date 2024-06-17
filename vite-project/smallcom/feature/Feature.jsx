import React from 'react';
import './feature.css';


const Feature = ({ title, text }) => {
    return (
        <div className='features__container-feature'>
            <div className='features__container-feature-title'>
                <div />
                <h1>{title}</h1>
            </div>
            <div className='features__container-feature-text'>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Feature;