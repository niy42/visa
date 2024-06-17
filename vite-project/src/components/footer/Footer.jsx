import React from 'react';
import { SocialIcon } from 'react-social-icons'
import logo from '../../assets/vlogo.png';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation('');;
    const { future, buytokens } = t('blockchain');
    const { contact } = t('navbar');
    return (
        <div className=' bg-gray-800 py-12 md:py-20' id={contact.toLowerCase()}>
            <div className='text-center mb-6 md:mb-12'>
                <h1 className='text-white text-3xl p-8 md:text-5xl font-semibold leading-tight'>
                    {future}
                </h1>
            </div>
            <div className='flex justify-center mb-10'>
                <button className='text-white text-2xl font-semibold md:text-lg border rounded-md border-white px-6 py-3 md:px-8 md:py-4 cursor-pointer hover:bg-white hover:text-gray-800 transition duration-300'>
                    <a href='https://shorturl.at/fHugQ' target='_blank' rel='noopener noreferrer'>{buytokens}</a>
                </button>
            </div>
            <div className='flex flex-col md:p-12 md:mt-32 md:flex-row flex-wrap justify-center'>
                <div className='text-center md:text-left md:w-1/3 mb-8 md:mb-0'>
                    <img src={logo} alt='gpt3' className='w-20 md:w-24 mx-auto md:mx-0' />
                    <p className='text-white text-sm md:text-base'>
                        Saltlakecity K12 182,<br />All Rights Reserved
                    </p>
                </div>
                <div className='text-center md:text-left md:w-1/5 mb-8 md:mb-0'>
                    <h4 className='text-white text-base md:text-lg font-semibold mb-3'>Links</h4>
                    <div className='flex flex-col md:flex-row justify-start'>
                        <p className='text-gray-300 text-sm md:text-base mb-2'><SocialIcon href="https://x.com/Visa_bnb" url="www.x.com" /></p>
                        <p className='text-gray-300 text-sm md:text-base mb-2'><SocialIcon href="https://t.me/visa_groupchat" url="www.telegram.com" /></p>
                    </div>
                    <p className='text-gray-300 text-sm md:text-base mb-2'>Contact</p>


                </div>
                <div className='text-center md:text-left md:w-1/5 mb-8 md:mb-0'>
                    <h4 className='text-white text-base md:text-lg font-semibold mb-3'>Company</h4>
                    <p className='text-gray-300 text-sm md:text-base mb-2'>Terms & Conditions</p>
                    <p className='text-gray-300 text-sm md:text-base mb-2'>Privacy Policy</p>
                    <p className='text-gray-300 text-sm md:text-base mb-2'>Contact</p>
                </div>
                <div className='footer__links-div text-center md:text-left md:w-1/4'>
                    <h4 className='text-white text-base md:text-lg font-semibold mb-3'>Get in touch</h4>
                    <p className='text-gray-300 text-sm md:text-base mb-2'>Saltlakecity K12 182 DK</p>
                    <p className='text-gray-300 text-sm md:text-base mb-2'>085-132567</p>
                    <p className='text-gray-300 text-sm md:text-base mb-2'>	admin@visamemetoken.site</p>
                </div>
            </div>
            <div className='footer__copywrite text-center mt-12'>
                <p className='text-gray-300 text-xs md:text-sm'>&copy; 2024 VisaBnB. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Footer;
