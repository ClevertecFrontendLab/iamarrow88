import { CSSProperties, ReactNode } from 'react';

export interface iconStylesInterface {
    color?: string;
    size?: string;
}

export interface MenuItemInterface {
    id: number;
    iconName: string;
    color: string;
    fontSize: string;
    label: string;
}

export interface itemInstanseInterface {
    key: number;
    label: string;
    title: string;
    className: string;
    icon?: ReactNode;
}

export interface list {
    title: string;
    listItems: string[];
}

export interface allProps {
    type?: string;
    props?: Partial<iconPropsInterface>;
    style?: CSSProperties;
}

export interface iconPropsInterface {
    className?: string;
    style?: CSSProperties;
    twoToneColor?: string;
}

export interface propsInterface {
    className: string;
    style: CSSProperties;
    icon?: ReactNode;
}

export interface initialTypesInterface {
    isLoggedIn: boolean
}

export type isLogginInType = ('loggin/true' | 'loggin/false');

export interface ActionsInterface {
    type: isLogginInType,
    payload: string
}

export type MessageIconsTypes = 'error' | 'success' | 'serverTroubles' | 'warning' | 'attention';

export interface ErrorMessagesInterface {
    from: string,
    icon: MessageIconsTypes,
    title: string,
    description: string,
    buttonName: string,
    url: string,
    autoRequest: boolean,
    redirect: string | string[]
}


export interface LoginDataInterface {
    google: undefined,
    password: string,
    recovery: undefined,
    remember: boolean,
    submit: undefined,
    username: string
}

export interface OnFinishDataAuth {
    password: string,
    passwordRepeat?: string,
    email?: string,
    remember?: boolean,
    google?: undefined,
    submit?: undefined,

}
