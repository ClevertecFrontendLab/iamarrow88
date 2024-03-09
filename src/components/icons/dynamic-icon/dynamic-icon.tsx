import { CSSProperties, useState } from 'react';

import {
    HeartFilled,
    IdcardOutlined,
    SettingOutlined,
    AndroidFilled,
    AppleFilled,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons';


import {allProps, iconPropsInterface} from '../../../customTypes/content-types.ts';
import {Achievements, CalendarIconPath} from "@constants/icons/icons.tsx";

const DynamicIcon = ({
    type,
    props,
    style,
    isCollapsed,
    callback,
    className,
}: {
    type: string;
    props?: Partial<allProps>;
    style?: CSSProperties;
    isCollapsed?: boolean;
    className?: string;
    callback?: (value: boolean) => void;
}) => {
    const filteredProps: Partial<iconPropsInterface> = {};

    const [collapsed, setCollapsed] = useState(isCollapsed);
    filteredProps.className = props?.props?.className;
    filteredProps.style = props?.props?.style;

    if (props?.props?.twoToneColor) {
        filteredProps.twoToneColor = props?.props?.twoToneColor;
    }
    if (style) {
        filteredProps.style = style;
    }
    switch (type) {
        case 'calendar': {
            return (
                <CalendarIconPath />
            );
        }
        case 'HeartFilled': {
            return <HeartFilled {...filteredProps} className={className} />;
        }
        case 'IdcardOutlined': {
            return <IdcardOutlined {...filteredProps} className={className} />;
        }
        case 'achievements': {
            return (
                <Achievements />
            );
        }
        case 'SettingOutlined': {
            return <SettingOutlined {...filteredProps} className={className} />;
        }
        case 'AndroidFilled': {
            return <AndroidFilled {...filteredProps} className={className} />;
        }
        case 'AppleFilled': {
            return <AppleFilled {...filteredProps} className={className} />;
        }
        case 'menu':
        case 'menuFold':
        case 'menuUnfold': {
            if (callback) callback(Boolean(collapsed));
            if (isCollapsed) {
                return (
                    <MenuFoldOutlined
                        {...filteredProps}
                        className={className}
                        onClick={() => {
                            setCollapsed(false);
                        }}
                    />
                );
            } else {
                return (
                    <MenuUnfoldOutlined
                        {...filteredProps}
                        className={className}
                        onClick={() => {
                            setCollapsed(true);
                        }}
                    />
                );
            }
        }
    }
};

export default DynamicIcon;
