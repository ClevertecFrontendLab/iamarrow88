import Logo from "@components/blocks/common/logo/logo.tsx";
import {Tabs} from "antd";
import './entry-block.css';

const EntryBlock = () => {
    const items = [
        {
            label: `Вход`,
            key: '1',
            children: <Logo isCollapsed={false} className="logo" />,
        },
        {
            label: `Регистрация`,
            key: '2',
            children: <Logo isCollapsed={false} className="logo" />,
        },
    ]
    return (
        <div className="entry-block">
            <Logo isCollapsed={false} className='entry-logo' />

            <Tabs
                defaultActiveKey="1"
                type="card"
                size="middle"
                items={items}
            />

        </div>
    );
};

export default EntryBlock;
