import img from '../../assets/visa.png';
import { useTranslation } from 'react-i18next';

const Welcome = () => {
    const { t } = useTranslation();
    const { line1, whitepaper } = t('description');

    console.log(line1);
    return (
        <div className="flex w-full justify-center items-center bg-gray-900">
            <div className="flex flex-col md:flex-row items-center justify-between p-8 md:p-20 w-full max-w-screen-xl">
                <div className="flex flex-col justify-center md:mr-16 text-center md:text-left">
                    <h1 className="text-3xl sm:text-5xl my-2 py-1 gradient__text">{t("greeting")}<br /></h1>
                    <p className="text-base sm:text-2xl text-gray-200 mt-4 mb-4">{line1}<br />
                    </p>
                    <a className="text-base sm:text-base bg-red-600 py-2 px-4 rounded-md w-[165px] text-gray-100 mt-4 mb-4" href="https://visa-2.gitbook.io/whitepaper/" target='_blank' rel='noopener noreferrer'>{whitepaper}</a>
                </div>
                <div className="flex justify-center md:justify-end w-full mt-6 md:mt-0">
                    <img src={img} alt="photo" className="w-full max-w-[520px] h-auto" />
                </div>
            </div>
        </div>
    );
}

export default Welcome;
