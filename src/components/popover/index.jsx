import PropTypes from 'prop-types';
import css from './popover.module.scss';
import { useRef } from 'react';

export const placementType = {
    top: 'top',
    left: 'left',
    right: 'right',
    bottom: 'bottom'
}

function Popover(props) {
    const { placement, content, children, className, classNamePopover } = props;
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
        popoverShowElement.current.classList.add(css.fadeOut);

        const idTimeout = setTimeout(() => {
            const elements = document.querySelectorAll('[data-name="popover"]');
            for (const element of elements) {
                document.body.removeChild(element);
            }

            clearTimeout(idTimeout);
        }, 400);
    }

    return (
        <span
            onMouseEnter={mouseEnterHandle}
            onMouseLeave={mouseLeaveHandle}
            className={`${css.popover} ${className}`}>
            {children}
            <span
                ref={popoverElement}
                className={`${css.popoverMain} ${renderPlacement()} ${classNamePopover}`}>
                {content}
            </span>
        </span>
    )
}

Popover.defaultProps = {
    placement: placementType.bottom
};

Popover.propTypes = {
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
};

export default Popover
