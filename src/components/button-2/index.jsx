import { useEffect, useRef } from 'react';
import css from './button-2.module.scss';
import PropTypes from 'prop-types';
import Loader2 from '../loader-2';

export const button2Type = {
    outline: 'outline',
    primary: 'primary',
    outlineSmall: 'outlineSmall',
    primarySmall: 'primarySmall',
    secondary: 'secondary'
}

export const button2HtmlType = {
    submit: "submit",
    button: 'button'
}

function Button2(props) {
    const {
        children,
        classname,
        type,
        onClick,
        disabled,
        htmlType,
        loading
    } = props;

    const button = useRef(null);

    const renderTypeButton = () => {
        switch (type) {
            case button2Type.outline:
                return css.outline;
            case button2Type.primary:
                return css.primary;
            case button2Type.outlineSmall:
                return css.outlineSmall;
            case button2Type.primarySmall:
                return css.primarySmall;
            case button2Type.secondary:
                return css.secondary
            default:
                return css.outline;
        }
    }
    const renderClassLoading = () => {
        return loading ? '' : 'd-0'
    }

    useEffect(() => {
        if (loading && button) {
            button.current.disabled = true;
        } else {
            button.current.disabled = false;
        }
    }, [loading])

    return (
        <button
            ref={button}
            type={htmlType}
            onClick={onClick}
            className={`${css.button} ${renderTypeButton()}  ${classname}`}
            disabled={disabled}>
            <span className={renderClassLoading()}>
                <Loader2 />
            </span>
            {children}
        </button>
    )
}

Button2.propTypes = {
    children: PropTypes.node,
    classname: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),
    type: PropTypes.oneOf(Object.values(button2Type)),
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    htmlType: PropTypes.oneOf(Object.values(button2HtmlType)),
    loading: PropTypes.bool
}

Button2.defaultProps = {
    type: button2Type.outline,
    onClick: () => { },
    disabled: false,
    htmlType: button2HtmlType.button,
    loading: false
};

export default Button2