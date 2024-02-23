import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Button, Layout, Space } from 'antd';
const { Content, Sider } = Layout;
import bgImage from '/img/main_bg_light.jpg';
import {
    list,
    about,
    actionsCard,
    menuItems,
} from '@constants/content/main-page/content-main-page.tsx';
import Logo from '@components/blocks/common/logo/logo.tsx';
import CardLink from '@components/blocks/main/card-link/card-link.tsx';
import FooterBlock from '@components/layouts/footer-block/footer-block.tsx';
import TextBlock from '@components/blocks/main/text-block/text-block.tsx';
import HeaderBlock from '@components/layouts/header-block/header-block.tsx';
import MenuBlock from '@components/blocks/main/menu/menu-block.tsx';
import ExitIcon from '@components/icons/exit-icon/exit-icon.tsx';
import DynamicIcon from '@components/icons/dynamic-icon/dynamic-icon.tsx';
import './main-page.css';

export const MainPage: React.FC = () => {
    const isBigMobile = useMediaQuery({ query: '(min-width: 768px)' });
    const [collapsed, setCollapsed] = useState(false);
    const isBigTablet = useMediaQuery({ query: '(min-width: 1020px)' });
    const isTablet = useMediaQuery({ query: '(min-width: 834px)' });

    const menuAction = (value: { initialCollapsed: boolean }): void => {
        setCollapsed(value);
    };

    const exitButton = isBigMobile ? (
        <Button
            icon={<ExitIcon className='exit__icon' style={{ fontSize: '14px' }} />}
            className='button-icon-text exit__button'
        >
            {collapsed ? '' : 'Выход'}
        </Button>
    ) : (
        <Button className='button-icon-text exit__button'>{collapsed ? '' : 'Выход'}</Button>
    );

    return (
        <>
            <Layout
                className='layout'
                style={{
                    backgroundImage: `url(${bgImage})`,
                    position: 'relative',
                }}
            >
                <Sider
                    className='sider'
                    collapsible
                    collapsed={collapsed}
                    width={isBigMobile ? '208px' : '106px'}
                    collapsedWidth={isBigMobile ? '64px' : '0px'}
                    theme={'light'}
                >
                    <Logo isCollapsed={collapsed} className={'logo'} />
                    <MenuBlock
                        isCollapsed={collapsed}
                        itemsData={menuItems}
                        isBigMobile={isBigMobile}
                    />
                    <div
                        className={
                            collapsed ? 'menu__exit exit exit--collapsed' : 'menu__exit exit'
                        }
                    >
                        {exitButton}
                    </div>
                </Sider>
                <Layout style={{ position: 'relative' }} className='body-layout'>
                    <div
                        className={
                            collapsed
                                ? 'trigger__wrapper trigger__wrapper--collapsed'
                                : 'trigger__wrapper trigger__wrapper--uncollapsed'
                        }
                        data-test-id={isTablet ? 'sider-switch' : 'sider-switch-mobile'}
                    >
                        <DynamicIcon
                            type='menu'
                            isCollapsed={collapsed}
                            callback={menuAction}
                            className='trigger'
                        />
                    </div>

                    <HeaderBlock
                        isCollapsed={collapsed}
                        isBigTablet={isBigTablet}
                        isBigMobile={isBigMobile}
                    />

                    <Content className='main'>
                        <TextBlock className='pros' list={list} />

                        <TextBlock className='about' text={about} />

                        <Space className='actions' size={isBigMobile ? 'middle' : 'small'}>
                            {actionsCard.map((cardData) => {
                                return (
                                    <CardLink
                                        key={cardData.id}
                                        title={cardData.title}
                                        iconName={cardData.iconName}
                                        iconTitle={cardData.iconTitle}
                                        className='actions__card'
                                        color='#2F54EB'
                                        size='14px'
                                        isCollapsed={collapsed}
                                    />
                                );
                            })}
                        </Space>
                    </Content>

                    <FooterBlock />
                </Layout>
            </Layout>
        </>
    );
};
