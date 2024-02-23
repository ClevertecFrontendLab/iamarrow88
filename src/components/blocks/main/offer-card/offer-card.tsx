import { Button } from 'antd';
import { AndroidFilled, AppleFilled } from '@ant-design/icons';
import './offer-card.css';
const OfferCard = () => (
    <div className='offer'>
        <div className='offer__text'>
            <Button type='link' className='offer__link'>
                Скачать на телефон
            </Button>
            <div className='offer__info'>Доступно в PRO-тарифе</div>
        </div>
        <div className='offer__buttons'>
            <Button icon={<AndroidFilled />} className='offer__btn' style={{ fontSize: '14px' }}>
                Android OS
            </Button>
            <Button icon={<AppleFilled />} className='offer__btn' style={{ fontSize: '14px' }}>
                Apple iOS
            </Button>
        </div>
    </div>
);

export default OfferCard;
