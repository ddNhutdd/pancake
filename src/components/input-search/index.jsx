import { forwardRef } from "react";
import css from './input-search.module.scss';
import PropTypes from 'prop-types';
import { IoIosSearch } from "react-icons/io";
import Button2, { button2Type } from "../button-2";

const InputSearch = forwardRef((props, ref) => {
    const { placeholder } = props;

    return (
        <form className={`flex items-center justify-between gap-3 ${css.inputSearch}`}>
            <span className={`flex items-center justify-center ${css.inputSearch__icon}`}>
                <IoIosSearch />
            </span>
            <input className={`${css.inputSearch__input}`} ref={ref} type="text" placeholder={placeholder} />
            <Button2 classname={`${css.inputSearch__button}`} type={button2Type.outlineSmall}>/</Button2>
        </form>
    )
})


InputSearch.propTypes = {
    placeholder: PropTypes.string
};

InputSearch.defaultProps = {
    placeholder: '10',
};

export default InputSearch;


