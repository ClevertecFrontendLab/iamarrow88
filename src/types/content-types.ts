import {CSSProperties, ReactNode} from "react";

export interface iconStylesInterface {
    color?: string,
    size?: string
}

export interface MenuItemInterface {
    id: number,
    iconName: string,
    color: string,
    fontSize: string,
    label: string
}

export interface itemInstanseInterface {
    key: number,
    label: string,
    title: string,
    className: string,
    icon?: ReactNode
}

export interface list {
    title: string,
    listItems: string[]
}

export interface allProps {
    type?: string,
    props?: Partial<propsInterface>,
    style?: CSSProperties
}

export interface propsInterface {
    className?: string,
    style?: CSSProperties,
    twoToneColor?: string
}

export interface propsInterface {
    className: string,
    style: CSSProperties,
    icon?: ReactNode
}
