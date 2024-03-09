import React, {useEffect, useState} from 'react';
import { useMediaQuery } from 'react-responsive';
import { Button, Layout, Space } from 'antd';
const { Content, Sider } = Layout;
import bgImage from '../../assets/img/main/main_bg_light.jpg';
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
import './main-page.css';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {Paths} from "../../routes/paths.ts";
import {StoreActionTypes} from "@redux/config/redux-constants.ts";
import {MenuFoldOutlined, MenuUnfoldOutlined} from '@ant-design/icons';
import {ExitIcon} from "@constants/icons/icons.tsx";
import {useAuth} from "../../provider/AuthProvider.tsx";
import useNavHistory from "@hooks/useNavHistory.tsx";
import isRedirectNeeded from "@utils/isRedirectNeeded.ts";

export const MainPage: React.FC = () => {
    const isBigMobile = useMediaQuery({ query: '(min-width: 768px)' });
    const [collapsed, setCollapsed] = useState(false);
    const isBigTablet = useMediaQuery({ query: '(min-width: 1020px)' });
    const isTablet = useMediaQuery({ query: '(min-width: 834px)' });

    const { token, updateToken } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            logOut();
        }
    }, [token])

    const { location, prevLocation } = useNavHistory();
    console.log(location);
    console.log(prevLocation);

    const menuAction = (): void => setCollapsed(!collapsed);

    const exitButtonName = collapsed
        ? ''
        : token ? 'Выйти' : 'Войти';
    const dispatch = useDispatch();
    function logOut() {
        if (updateToken) updateToken('');
        dispatch({ type: StoreActionTypes.loginFalse});
        localStorage.removeItem('accessToken');
        navigate(Paths.Auth);
    }

    const exitButton = isBigMobile ? (
        <Button
            icon={<ExitIcon />}
            className='button-icon-text exit__button'
            onClick={logOut}
        >
            {exitButtonName}
        </Button>
    ) : (
        <Button className='button-icon-text exit__button' onClick={logOut}>{exitButtonName}</Button>
    );

    return (
        <>
            <Layout
                className={collapsed ? 'main-page main-page--collapsed' : 'main-page main-page--uncollapsed'}
                style={{
                    backgroundImage: `url(${bgImage})`,
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
                    <Logo isCollapsed={collapsed} className={'logo'}/>

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
                <Layout className='body-layout'>
                    <div
                        className={
                            collapsed
                                ? 'trigger__wrapper trigger__wrapper--collapsed'
                                : 'trigger__wrapper trigger__wrapper--uncollapsed'
                        }
                        data-test-id={isTablet ? 'sider-switch' : 'sider-switch-mobile'}
                    >

                        {collapsed
                            ? <MenuFoldOutlined
                                className='trigger'
                                onClick={menuAction}/>
                            : <MenuUnfoldOutlined
                                className='trigger'
                                onClick={menuAction}/>}
                    </div>

                    <div className="page-content">
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
                    </div>
                </Layout>
            </Layout>
        </>
    );
};
