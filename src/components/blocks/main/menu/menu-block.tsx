import DynamicIcon from '@components/icons/dynamic-icon/dynamic-icon.tsx';
import { Menu } from 'antd';
import './menu-block.css';
import { MenuItemInterface, itemInstanceInterface } from '../../../../customTypes/content-types.ts';

const MenuBlock = ({
    isCollapsed,
    itemsData,
    isBigMobile,
}: {
    isCollapsed: boolean;
    itemsData: Array<MenuItemInterface>;
    isBigMobile: boolean;
}) => {
    const itemsArray = itemsData.map((itemData) => {
        const item: itemInstanceInterface = {
            key: itemData.id,
            label: `${isCollapsed ? '' : itemData.label}`,
            title: `${itemData.label}`,
            className: 'menu__item',
        };

        if (isBigMobile) {
            item.icon = (
                <DynamicIcon
                    type={itemData.iconName}
                    props={{ style: { color: '#10239E', fontSize: '14px' } }}
                    style={{ color: '#10239E', fontSize: '14px' }}
                    className='item__icon'
                />
            );
        }

        return item;
    });

    const menuClasses = isCollapsed ? 'menu menu--collapsed' : 'menu menu--uncollapsed';

    return (
        <Menu
            className={menuClasses}
            mode='inline'
            inlineIndent={2}
            items={itemsArray}
            style={{ position: 'relative', flex: 'auto', minWidth: 0 }}
        ></Menu>
    );
};

export default MenuBlock;
