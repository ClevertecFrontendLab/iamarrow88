import { CSSProperties, ReactNode } from 'react';
import { Breadcrumb, Button, Layout } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
const { Header } = Layout;
import DynamicIcon from '@components/icons/dynamic-icon/dynamic-icon.tsx';
import { headerTitle1, headerTitle2 } from '@constants/content/main-page/content-main-page.tsx';
import { propsInterface } from '@types/content-types.ts';
import './header-block.css';

const HeaderBlock = ({
    isCollapsed,
    isBigTablet,
    isBigMobile,
}: {
    isCollapsed: boolean;
    isBigTablet: boolean;
    isBigMobile: boolean;
}) => {
    const props: propsInterface = {
        className: 'title__settings button-icon-text',
        style: { fontSize: '14px' },
    };
    if (isBigTablet) {
        props.icon = <SettingOutlined />;
    }
    return (
        <Header className='header'>
            <Breadcrumb className='header__pathLine pathLine' separator={''}>
                <Breadcrumb.Item className='pathLine__item'>Главная</Breadcrumb.Item>
            </Breadcrumb>
            <div
                className={
                    isCollapsed
                        ? 'content__wrapper content__wrapper--collapsed'
                        : 'content__wrapper header__wrapper--uncollapsed'
                }
            >
                <div className='header__wrapper'>
                    <h1 className={'header__title'}>{headerTitle1}</h1>
                    <h2 className={'header__title'}>{headerTitle2}</h2>
                </div>
                {isBigMobile ? (
                    <Button {...props}>Настройки</Button>
                ) : (
                    <div className='settings__outline'>
                        {' '}
                        <Button
                            icon={
                                <DynamicIcon
                                    type='SettingOutlined'
                                    props={{ style: { color: '#262626', fontSize: '14px' } }}
                                    style={{ color: '#262626', fontSize: '14px' }}
                                    className='settings__icon'
                                />
                            }
                            {...props}
                        />
                    </div>
                )}
            </div>
        </Header>
    );
};

export default HeaderBlock;
