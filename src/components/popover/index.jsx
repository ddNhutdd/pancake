import PropTypes from 'prop-types';
import css from './popover.module.scss';
import { forwardRef, useEffect, useRef } from 'react';

export const placementType = {
    top: 'top',
    left: 'left',
    right: 'right',
    bottom: 'bottom'
}
export const triggerType = {
    runtime: 'runtime',
    hover: 'hover'
}

const Popover = forwardRef((props, ref) => {
    const { placement, content, children, className, classNamePopover, trigger, show } = props;
    const popoverElement = useRef(null);
    const popoverShowElement = useRef(null);

    const renderPlacement = () => {
        switch (placement) {
            case placementType.top:
                return css.top;
            case placementType.bottom:
                return css.bottom;
            case placementType.right:
                return css.right;
            case placementType.left:
                return css.left;
            default:
                return css.top;
        }
    }
    const mouseEnterHandle = () => {
        const rect = popoverElement.current.getBoundingClientRect();
        const top = rect.top + window.scrollY;
        const left = rect.left + window.scrollX;
        const html = popoverElement.current.outerHTML;
        const newElement = document.createElement("span");
        popoverShowElement.current = newElement;
        newElement.innerHTML = html;
        newElement.style.position = "absolute";
        newElement.style.top = top + "px";
        newElement.style.left = left + "px";
        newElement.dataset.name = 'popover';
        document.body.appendChild(newElement);
    }
    const mouseLeaveHandle = () => {
        if (!popoverShowElement?.current) return;
        document.body.removeChild(popoverShowElement.current);
        popoverShowElement.current = null;
    }
    const renderTrigger = () => {
        if (trigger === triggerType.hover) {
            return {
                onMouseEnter: mouseEnterHandle,
                onMouseLeave: mouseLeaveHandle
            };
        }
    }

    useEffect(() => {
        if (trigger === triggerType.runtime && show) {
            mouseEnterHandle();
        } else if (trigger === triggerType.runtime && !show) {
            mouseLeaveHandle();
        }
    }, [show])

    return (
        <span
            ref={ref}
            {...renderTrigger()}
            className={`${css.popover} ${className}`}>
            {children}
            <span
                ref={popoverElement}
                className={`${css.popoverMain} ${renderPlacement()} ${classNamePopover}`}>
                {content}
            </span>
        </span>
    )
})

Popover.defaultProps = {
    placement: placementType.bottom,
    trigger: triggerType.hover,
};

Popover.propTypes = {
    show: PropTypes.bool,
    placement: PropTypes.oneOf(Object.values(placementType)),
    content: PropTypes.node,
    children: PropTypes.node,
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),
    classNamePopover: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),
    trigger: PropTypes.oneOf(Object.values(triggerType)),
};

export default Popover
