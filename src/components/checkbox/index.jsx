import css from './checkbox.module.scss';
import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const CheckBox = forwardRef((props, ref) => {
    const { id, text } = props;
    return (
        <div className={css.checkbox}>
            <input ref={ref} type="checkbox" className='d-0' id={id} />
            <label htmlFor={id}>
                <div className={css.checkbox__square}></div>
                <div className={css.text}>
                    {text}
                </div>
            </label>
        </div>
    )
})

CheckBox.propTypes = {
    id: PropTypes.string,
    text: PropTypes.string
};

export default CheckBox