import PropTypes from 'prop-types';
import css from './dropdown-header-3.module.scss';
import { FaAngleDown } from "react-icons/fa";

export const DropdownHeader3 = (props) => {
    const { header, list, notShowMenu, menuWidthFull, content, cssHeader, showMenu, setShowMenu } = props;

    const renderMenuItem = () => {
        if (!list || list.length <= 0) {
            return;
        }
        const renderDivide = (value) => {
            if (!value) return;
            return <div className={css.dropdownHeader3__divide}></div>
        }

        return list.map(item => (
            <div key={item.id}  >
                <div className={css.dropdownHeader3__item}>
                    {item.content}
                </div>
                {renderDivide(item.borderBottom)}
            </div>
        ))
    }
    const renderNotShowMenu = () => {
        return notShowMenu ? 'd-0' : ''
    }
    const renderClassMenuWidthFullHeader = () => {
        return menuWidthFull ? '' : 'relative';
    }
    const renderClassMenuWithFullContainer = () => {
        return menuWidthFull ? 'w-100' : ''
    }
    const renderShow = () => {
        return menuWidthFull ? content : renderMenuItem();
    }
    const headerClickHandle = () => {
        setShowMenu(s => !s);
    }
    const renderClassShowMenu = () => {
        return showMenu ? css.show : '';
    }

    return (
        <div className={`${css.dropdownHeader3} ${renderClassMenuWidthFullHeader()}`}>
            <div onClick={headerClickHandle} className={`${css.dropdownHeader3__header} ${cssHeader}`}>
                {header}
                <FaAngleDown />
            </div>
            <div className={`${css.dropdownHeader3__menuContainer} ${renderNotShowMenu()} ${renderClassMenuWithFullContainer()} ${renderClassShowMenu()}`}>
                <div className={`${css.dropdownHeader3__menu} `}>
                    {renderShow()}
                </div>
            </div>
        </div>
    )
}

DropdownHeader3.propTypes = {
    header: PropTypes.node,
    list: PropTypes.array,
    notShowMenu: PropTypes.bool,
    menuWidthFull: PropTypes.bool,
    content: PropTypes.node,
    cssHeader: PropTypes.node,
    showMenu: PropTypes.bool,
    setShowMenu: PropTypes.func,
}
DropdownHeader3.defaultProps = {
    header: `header`,
    list: [],
    notShowMenu: false,
    menuWidthFull: false,
    content: ``,
    cssHeader: <></>,
    showMenu: false,
    setShowMenu: () => { }
}
