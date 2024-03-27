import PropTypes from 'prop-types';
import css from './dropdown-2.module.scss';
import { useEffect, useRef, useState } from 'react';

export const dropdown2TriggerType = {
    hover: 'hover',
    click: 'click',
    runtime: 'runtime'
}

export const dropdown2Align = {
    left: 'left',
    right: 'right'
}

export const Dropdown2 = (props) => {
    const {
        trigger,
        header,
        list,
        onChange,
        show,
        align,
        allowItemHover,
        styleMenuContainer
    } = props

    const renderListItem = () => {
        if (!list || list.length <= 0) return;

        const onClickItemHandle = (item, ev) => {
            onChange(item, ev)
        }
        return list.map(item => (
            <div key={item.id}>
                <div
                    onClick={onClickItemHandle.bind(null, item)}
                    className={`${css.dropdown2__item} ${renderClassAllowHover()}`}>
                    {item.content}
                </div>
                {renderLine(item.lineBot)}

            </div>
        ))
    };
    const renderTrigger = () => {
        switch (trigger) {
            case dropdown2TriggerType.hover:
                return {
                    onMouseEnter: onMouseEnterHandle,
                    onMouseLeave: onMouseLeaveHandle
                }
            case dropdown2TriggerType.click:
                return {
                    onClick: onClickHandle
                }
            case dropdown2TriggerType.runtime:
                return {}
            default:
                return {
                    onMouseEnter: onMouseEnterHandle,
                    onMouseLeave: onMouseLeaveHandle
                }
        }
    }
    const onMouseEnterHandle = () => {
        setShowDropdown(true)
    }
    const onMouseLeaveHandle = () => {
        setShowDropdown(false)
    }
    const onClickHandle = () => {
        setShowDropdown(s => !s)
    }
    const renderClassShowDropdown = () => {
        return showDropdown ? css.show : '';
    }
    const renderClassAllowHover = () => allowItemHover ? css.allowHover : ''
    const renderStyleMenuContainer = () => {
        if (trigger === dropdown2TriggerType.runtime) return {
            marginTop: padding + 2,
            [align]: 0,
            ...styleMenuContainer
        }
        else return {
            paddingTop: padding + 2,
            [align]: 0,
            ...styleMenuContainer
        }
    }
    const renderLine = (lineBot) => lineBot === true ? <div className={css.dropdown2__item__line}></div> : <></>

    const [showDropdown, setShowDropdown] = useState(show);
    const [padding, setPadding] = useState(0);
    const headerElement = useRef(null);

    useEffect(() => {
        if (trigger === dropdown2TriggerType.runtime) {
            setShowDropdown(show);
        }
    }, [show])
    useEffect(() => {
        if (headerElement) {
            setPadding(headerElement.current.offsetHeight)
        }
    }, [])

    return (
        <div
            {...renderTrigger()}
            className={`${css.dropdown2} ${renderClassShowDropdown()}`}
        >
            <div ref={headerElement} className={css.dropdown2__header}>
                {header}
            </div>
            <div
                style={renderStyleMenuContainer()}
                className={css.dropdown2__menuContainer}>
                <div className={css.dropdown2__menu}>
                    {renderListItem()}
                </div>
            </div>
        </div>
    )
}

Dropdown2.propTypes = {
    trigger: PropTypes.oneOf(Object.values(dropdown2TriggerType)),
    header: PropTypes.node,
    list: PropTypes.array,
    onChange: PropTypes.func,
    show: PropTypes.bool,
    align: PropTypes.oneOf(Object.values(dropdown2Align)),
    allowItemHover: PropTypes.bool,
    styleMenuContainer: PropTypes.object
}

Dropdown2.defaultProps = {
    trigger: dropdown2TriggerType.hover,
    show: false,
    align: dropdown2Align.left,
    allowItemHover: true
};