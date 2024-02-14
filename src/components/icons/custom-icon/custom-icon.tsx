import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';
import {
    ExitIconPath,
    CalendarIconPath,
    ProfileIconPath,
    Achievements,
} from '@constants/icons/icons.tsx';

const CustomIcon = ({
    iconName,
    props,
    className,
}: {
    iconName: string;
    props: Partial<CustomIconComponentProps>;
    className?: string;
}) => {
    switch (iconName) {
        case 'exit': {
            return <Icon component={ExitIconPath} {...props} className={className} />;
        }
        case 'calendar': {
            return <Icon component={CalendarIconPath} {...props} className={className} />;
        }
        case 'profile': {
            return <Icon component={ProfileIconPath} {...props} className={className} />;
        }
        case 'achievements': {
            return <Icon component={Achievements} {...props} className={className} />;
        }
    }
};

export default CustomIcon;
