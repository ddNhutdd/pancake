import CopyButton from 'src/components/copy-button';
import css from './import.module.scss';
import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Input = forwardRef((props, ref) => {
    const { inputValue, setInputValue, rightContent } = props;

    const inputChangeHandle = (ev) => setInputValue(ev.target.value);

    return (
        <div>
            <CopyButton content={inputValue} />
            <input
                onChange={inputChangeHandle}
                value={inputValue}
                ref={ref}
                type="text" />
            <div className={css.input__right}>
                {rightContent}
            </div>
        </div>
    )
})

Input.propTypes = {
    rightContent: PropTypes.node,
    inputValue: PropTypes.string,
    setInputValue: PropTypes.func
};

export default Input