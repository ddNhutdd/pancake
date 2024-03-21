import css from './checkbox.module.scss';
import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { BsCheckLg } from "react-icons/bs";

const CheckBox = forwardRef((props, ref) => {
    const { id, text, require, errorText, onChange } = props;
    return (
        <div className={css.checkbox}>
            <input
                onChange={onChange}
                data-require={JSON.stringify(require)}
                ref={ref}
                type="checkbox"
                className='d-0'
                id={id} />
            <label
                className={css.checkbox__container}
                htmlFor={id}>
                <div className={css.checkbox__square}>
                    <BsCheckLg />
                </div>
                <div className={css.text}>
                    {text}
                </div>
            </label>
            <div className={css.checkbox__error}>
                {errorText}
            </div>
        </div>
    )
})

CheckBox.propTypes = {
    id: PropTypes.string,
    text: PropTypes.node,
    require: PropTypes.array,
    onChange: PropTypes.func,
    errorText: PropTypes.string
};

export default CheckBox