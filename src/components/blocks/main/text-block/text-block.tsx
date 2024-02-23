import './text-block.css';
import { list } from '../../../../customTypes/content-types.ts';

const TextBlock = ({
    className,
    text,
    list,
}: {
    className: string;
    text?: string;
    list?: list;
}) => {
    if (list) {
        const lines = list.listItems.map((el, index) => (
            <li className='list__item' key={index}>
                {el}
            </li>
        ));
        return (
            <div className={className}>
                <h2 className='pros__title'>{list.title}</h2>
                <ul className='pros__list list'>{lines}</ul>
            </div>
        );
    } else {
        return <div className={className}>{text}</div>;
    }
};

export default TextBlock;
