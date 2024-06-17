import i18next from 'i18next';
import React from 'react';
import { useTranslation } from 'react-i18next';

const languages = [
    {
        code: 'en',
        lang: 'English'
    },
    {
        code: 'chi',
        lang: '中國人'
    },
]

const changeLanguage = (code) => {
    i18next.changeLanguage(code);
}

const LangSelector = ({ classProps }) => {

    //const { i18next } = useTranslation();
    return (
        <div>
            <div className={`${classProps}`}>
                {languages.map(({ lang, code }) => (

                    <button className='p-3 focus m-2 gap-3 text-white text-base'
                        onClick={() => changeLanguage(code)}
                        key={code}>
                        {lang}
                    </button>


                ))}
            </div>
        </div>
    )
}

export const LangSelectorsm = ({ classProps }) => {
    return (
        <div>
            <div className={`${classProps}`}>
                {languages.map(({ lang, code }) => (
                    <button className='p-3 focus m-2 gap-3 text-white text-base'
                        onClick={() => changeLanguage(code)}
                        key={code}>
                        {lang}
                    </button>
                ))}
            </div>

        </div>
    )
}


export default LangSelector;
