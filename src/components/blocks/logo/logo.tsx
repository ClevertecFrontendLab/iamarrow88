import logoImg from '/logo.png';
import shortLogo from '/shortLogo.png';
import './logo.css';

const Logo = ({ isCollapsed, className }: { isCollapsed: boolean; className: string }) => (
    <div
        className={isCollapsed ? className + ' logo--collapsed' : className + ' logo--uncollapsed'}
    >
        <img src={isCollapsed ? shortLogo : logoImg} alt='App logo' />
    </div>
);

export default Logo;
