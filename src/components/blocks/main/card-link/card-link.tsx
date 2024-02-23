import './card-link.css';
import { Button } from 'antd';
import { HeartFilled, IdcardOutlined } from '@ant-design/icons';
import CustomIcon from '@components/icons/custom-icon/custom-icon.tsx';
import { iconStylesInterface } from '../../../../customTypes/content-types.ts';

const CardLink = ({
    title,
    iconName,
    iconTitle,
    className,
    color,
    size,
    isCollapsed,
}: {
    title: string;
    iconName: string;
    iconTitle: string;
    className?: string;
    color?: string;
    size?: string;
    isCollapsed?: boolean;
}) => {
    const classes = className ? `card-link ${className}` : 'card-link';

    const iconStyles: iconStylesInterface = {};

    if (color) {
        iconStyles['color'] = `${color}`;
    }

    if (size) {
        iconStyles['size'] = `${size}`;
    }

    const classNames = isCollapsed
        ? classes + ' card-link--collapsed'
        : classes + ' card-link--uncollapsed';
    switch (iconName) {
        case 'HeartFilled': {
            return (
                <div className={classNames}>
                    <div className='card-link__title'>{title}</div>
                    <Button
                        icon={<HeartFilled className='card-link__icon' />}
                        style={iconStyles}
                        className='card-link__icon-title'
                    >
                        {iconTitle}
                    </Button>
                </div>
            );
        }

        case 'calendar': {
            return (
                <div className={classNames}>
                    <div className='card-link__title'>{title}</div>
                    <Button
                        icon={
                            <CustomIcon
                                iconName='calendar'
                                props={{ style: iconStyles }}
                                className='card-link__icon'
                            />
                        }
                        style={{ color: `${color}` }}
                        className='card-link__icon-title'
                    >
                        {iconTitle}
                    </Button>
                </div>
            );
        }

        case 'IdcardOutlined': {
            return (
                <div className={classNames}>
                    <div className='card-link__title'>{title}</div>
                    <Button
                        icon={<IdcardOutlined className='card-link__icon' />}
                        style={iconStyles}
                        className='card-link__icon-title'
                    >
                        {iconTitle}
                    </Button>
                </div>
            );
        }
    }
};

export default CardLink;
