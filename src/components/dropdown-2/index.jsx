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
        align
    } = props

    const renderListItem = () => {
        if (!list || list.length <= 0) return;

        const onClickItemHandle = (item, ev) => {
            onChange(item, ev)
        }
        return list.map(item => (
            <div
                onClick={onClickItemHandle.bind(null, item)}
                key={item.id}
                className={css.dropdown2__item}>
                {item.content}
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
                style={{ paddingTop: padding, [align]: 0 }}
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
}

Dropdown2.defaultProps = {
    trigger: dropdown2TriggerType.hover,
    show: false,
    align: dropdown2Align.left,
};