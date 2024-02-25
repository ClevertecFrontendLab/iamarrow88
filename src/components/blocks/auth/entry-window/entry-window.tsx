import Logo from "@components/blocks/common/logo/logo.tsx";
import {Tabs} from "antd";
import './entry-window.css';
import {ReactElement} from "react";
import { useNavigate} from "react-router-dom";


const EntryWindow = ({children, selectedTab}: {children: ReactElement, selectedTab: string}) => {
    const navigate = useNavigate();
    const onChange = (key: string): void => {
        navigate(key, {replace: true})
    }
    const items = [
        {
            label: `Вход`,
            key: '/auth',
        },
        {
            label: `Регистрация`,
            key: 'registration',
        },
    ]

    return (
        <div className="entry-window">
            <Logo isCollapsed={false} className='entry-logo' />

            <div className="content-wrapper">
                <Tabs
                    defaultActiveKey={selectedTab}
                    size="middle"
                    items={items}
                    onChange={onChange}
                    tabBarStyle={{
                        display: "flex",
                        justifyContent: "space-around",
                        marginBottom: '24px',
                        fontFamily: "Inter, sans-sarif"
                    }}
                />
                {children}
            </div>


        </div>
    );
};

export default EntryWindow;
