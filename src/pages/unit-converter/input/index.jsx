import CopyButton from 'src/components/copy-button';
import css from './input.module.scss';
import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Input = forwardRef((props, ref) => {
    const { inputValue, setInputValue, rightContent, classRightContent } = props;

    const inputChangeHandle = (ev) => setInputValue(ev.target.value);

    return (
        <div className={css.input}>
            <div className={css.input__copy}>
                <CopyButton content={inputValue} />
            </div>
            <input
                onChange={inputChangeHandle}
                value={inputValue}
                ref={ref}
                type="text" />
            <div className={`${css.input__right} ${classRightContent}`}>
                {rightContent}
            </div>
        </div>
    )
})

Input.propTypes = {
    rightContent: PropTypes.node,
    inputValue: PropTypes.string,
    setInputValue: PropTypes.func,
    classRightContent: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
};

export default Input