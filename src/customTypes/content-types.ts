import { CSSProperties, ReactNode } from 'react';
import type {Reducer} from "redux";
import {RouterState} from "redux-first-history/src/reducer.ts";

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

export interface itemInstanceInterface {
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
    isLoggedIn: boolean,
    authData: {
      email: string,
      password: string,
    }
}

export enum storeActionTypes {
    loginTrue = "login/true",
    loginFalse = "login/false",
    emailWrite = "authData/email/write",
    passwordWrite = 'authData/password/write'
}

export interface ActionsInterface {
    type: storeActionTypes,
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
    requestTo?: string,
    redirect: string
}


export interface LoginDataInterface {
    google: undefined,
    password: string,
    recovery: undefined,
    remember: boolean,
    submit: undefined,
    username: string
}

export interface OnFinishRegistration {
    password: string,
    passwordRepeat: string,
    email: string,
    submit: undefined,
}

export interface OnFinishDataAuth {
    password: string,
    passwordRepeat?: string,
    email?: string,
    remember?: boolean,
    google?: undefined,
    submit?: undefined,
}

interface Map {
    [key: string]: string;
}

export interface RegistrationMapInterface extends Map {
    201: string,
    409: string,
    other: string
}


export type FunctionNavigate = (mapPages: RegistrationMapInterface) => void;

export interface StoreInterface {
    isLoggedIn: boolean;
    authData: {
        email: string;
        password: string;
    },
    router: Reducer<RouterState> | null;
}
