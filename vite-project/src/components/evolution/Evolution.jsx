import './evolution.css';
import { Feature } from '../../../smallcom';
import { useTranslation } from 'react-i18next';

const Evolution = () => {
    const { t } = useTranslation();
    const { evolution } = t('navbar');
    const { w, r, tokenB, rev, revolution, wisdom, reward, token } = t('evolution');
    const { heading, buy } = t('blockchain');

    return (
        <div className={`whatgpt3 section__margin`} id={evolution.toLowerCase()} >
            <div className='whatgpt3__feature'>
                <Feature title={rev} text={revolution} />
            </div>
            <div className='whatgpt3__heading'>
                <h1 className='gradient__text'>{heading}</h1>
                <p><a href='https://shorturl.at/fHugQ' target='_blank' rel='noopener noreferrer'>{buy}</a></p>
            </div>
            <div className='whatgpt3__container'>
                <Feature title={w} text={wisdom} />
                <Feature title={r} text={reward} />
                <Feature title={tokenB} text={token} />
            </div>
        </div>
    );
}

export default Evolution;
