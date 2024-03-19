import PropTypes from 'prop-types';
import css from './popover.module.scss';

export const placementType = {
    top: 'top',
    left: 'left',
    right: 'right',
    bottom: 'bottom'
}

function Popover(props) {
    const { placement, content, children, className, classNamePopover } = props;

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

    return (
        <span className={`${css.popover} ${className}`}>
            {children}
            <span
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