import { forwardRef, useEffect, useState } from "react";
import css from './input-search.module.scss';
import PropTypes from 'prop-types';
import { IoIosSearch } from "react-icons/io";
import Button2, { button2HtmlType, button2Type } from "../button-2";
import { useSearch } from "src/hooks/use-search";
import { apiResponse, apiStatus, url } from "src/constants";
import { useNavigate } from 'react-router-dom';
import useAlert from 'hooks/alert';
import { PiArrowElbowDownRightFill } from "react-icons/pi";
import { MdClose } from "react-icons/md";

const InputSearch = forwardRef((props, ref) => {
    const { placeholder } = props;
    const navigate = useNavigate();
    const alert = useAlert();
    const [fetchApiStatus, fetchSearch, error] = useSearch();
    const [searchValue, setSearchValue] = useState('');

    const inputSearchChangeHandle = (ev) => setSearchValue(ev.target.value);
    const submitHandle = (ev) => {
        ev.preventDefault();
        fetchSearch(searchValue);
    }
    const renderClassShowButton = () => searchValue ? '' : 'd-0';
    const clearClickHandle = () => setSearchValue('')

    useEffect(() => {
        if (fetchApiStatus === apiStatus.fullfiled) {
            setSearchValue('');
        }
        if (fetchApiStatus === apiStatus.rejected && error === apiResponse.notFound) {
            navigate(url.searchNotFound);
            setLocalStorage(localStorageVariable.search, searchValue);
        } else if (fetchApiStatus === apiStatus.rejected && error !== apiResponse.notFound) {
            alert.error(error)
        }
    }, [fetchApiStatus])

    return (
        <form
            onSubmit={submitHandle}
            className={`flex items-center justify-between gap-3 ${css.inputSearch}`}
        >
            <span
                className={`flex items-center justify-center ${css.inputSearch__icon}`}
            >
                <IoIosSearch />
            </span>
            <input
                value={searchValue}
                onChange={inputSearchChangeHandle}
                className={`${css.inputSearch__input}`}
                ref={ref}
                type="text"
                placeholder={placeholder}
            />
            <Button2
                onClick={clearClickHandle}
                classname={`${css.inputSearch__button} ${renderClassShowButton()}`}
                type={button2Type.outlineSmall}
            >
                <MdClose />
            </Button2>
            <Button2
                htmlType={button2HtmlType.submit}
                classname={`${css.inputSearch__button} ${renderClassShowButton()}`}
                type={button2Type.outlineSmall}
                loading={fetchApiStatus === apiStatus.fetching}
            >
                <PiArrowElbowDownRightFill />
            </Button2>
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


