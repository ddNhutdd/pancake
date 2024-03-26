import PropTypes from 'prop-types';
import css from './dropdown.module.scss';
import { FaAngleDown } from "react-icons/fa";
import Popover, { popoverPlacementType } from '../popover';

export const Dropdown = (props) => {
    const { id, list, selectedItem, onChange } = props;

    const renderList = () => {
        if (!list || list.length <= 0) {
            return;
        }
        const itemClickHandle = (item, ev) => {
            onChange(item, ev)
            document.getElementById(id).checked = false;
        }

        return list.map(item => (<div key={item.id}
            onClick={itemClickHandle.bind(null, item)}
            className={css.dropdown__item}>
            {item.content}
        </div>))
    }

    return (
        <div className={css.dropdown}>
            <input type="checkbox" id={id} />
            <label htmlFor={id} className={css.dropdown__header}>
                {selectedItem.content}
                <FaAngleDown />
            </label>
            <div className={css.dropdown__menuContainer}>
                <div className={css.dropdown__menu}>
                    {renderList()}
                </div>
            </div>
        </div >
    )
}

Dropdown.propTypes = {
    header: PropTypes.node,
    list: PropTypes.array,
    onChange: PropTypes.func,
    selectedItem: PropTypes.object,
    id: PropTypes.string
}

Dropdown.defaultProps = {
    onChange: () => { }
};