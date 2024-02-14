import { Button, Layout } from 'antd';
const { Footer } = Layout;
import OfferCard from '@components/blocks/offer-card/offer-card.tsx';
import './footer-block.css';
const FooterBlock = () => (
    <Footer className='footer'>
        <Button type='link' className='reviews-link'>
            Смотреть отзывы
        </Button>

        <OfferCard />
    </Footer>
);

export default FooterBlock;
