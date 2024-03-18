import css from './button-2.module.scss';
import PropTypes from 'prop-types';

export const button2Type = {
    outline: 'outline',
    primary: 'primary',
    outlineSmall: 'outlineSmall',
    primarySmall: 'primarySmall'
}

function Button2(props) {
    const { children, classname, type, onClick } = props

    const renderTypeButton = () => {
        switch (type) {
            case button2Type.outline:
                return css.outline;
            case button2Type.primary:
                return css.primary;
            case button2Type.outlineSmall:
                return css.outlineSmall;
            case button2Type.primarySmall:
                return css.primarySmall
            default:
                return css.outline;
        }
    }

    return (
        <button onClick={onClick} className={`${css.button} ${renderTypeButton()}  ${classname}`}>
            {children}
        </button>
    )
}

Button2.propTypes = {
    children: PropTypes.node,
    classname: PropTypes.object,
    type: PropTypes.oneOf(Object.keys(button2Type)),
    onClick: PropTypes.func
}

Button2.defaultProps = {
    type: button2Type.outline,
    onClick: () => { }
};

export default Button2