import React from 'react';
import image from '../../assets/visa1.png';
import { useTranslation } from 'react-i18next';
import Carousel from '../carousel/Carousel';
import data from '../data';

const Utilities = () => {
    const { t } = useTranslation();

    const { l0, l1, l2, l3, l4, l5, l6, l7, l8, l9, para, para1 } = t("description");
    const { utilities } = t('navbar');
    return (
        <div className="container mx-auto p-4" id={utilities.toLowerCase()}>
            <div className='flex flex-col md:flex-row md:items-center'>
                <div className='flex flex-col md:flex-1 justify-center items-center text-center md:text-left md:p-6 mt-8 mb-14 sm:mt-4 sm:mb-8'>
                    <img src={image} alt='Visa card' className='w-full max-w-[580px] h-auto' />
                </div>
                <div className='flex flex-col justify-center md:flex-1 px-6'>
                    {/*<p className='max-w-prose text-white text-sm'>
                        {l0}
                    </p>*/}
                    <div className="text-gray-300 mb-6" dangerouslySetInnerHTML={{ __html: l0 }} />
                    <Carousel images={data()} />
                    <div className='p-6'>


                    </div>
                    <div className="text-gray-300 mb-4" dangerouslySetInnerHTML={{ __html: para }} />
                    <div className="text-gray-300" dangerouslySetInnerHTML={{ __html: para1 }} />

                </div>
            </div>
        </div>
    );
}

export default Utilities;
