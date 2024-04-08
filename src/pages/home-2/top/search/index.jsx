import Button2, { button2HtmlType, button2Type } from 'src/components/button-2';
import css from './search.module.scss';
import { IoSearchSharp } from "react-icons/io5";
import { Dropdown } from 'src/components/dropdown';
import { useEffect, useState } from 'react';
import { apiResponse, apiStatus, localStorageVariable, url } from 'src/constants';
import { useNavigate } from 'react-router-dom';
import useAlert from 'hooks/alert';
import { setLocalStorage } from 'src/utils';
import { useSearch } from 'src/hooks/use-search';

function Search() {
    const list = [
        {
            id: 1,
            content: `All Fillter`
        },
        {
            id: 2,
            content: `Addressed`
        },
        {
            id: 3,
            content: `All Fillter`
        },
        {
            id: 4,
            content: `All Fillter`
        },
        {
            id: 5,
            content: `Addressed`
        },
    ]

    const navigate = useNavigate();
    const alert = useAlert();
    const [fetchApiStatus, fetchSearch, error] = useSearch();
    const [searchTypeSelectd, setSearchTypeSelectd] = useState(list.at(0));
    const [searchInput, setSearchInput] = useState('');

    const searchTypeChangeHandle = (item, ev) => {
        ev.stopPropagation();
        setSearchTypeSelectd(item);
    }
    const searchInputChangeHandle = (ev) => setSearchInput(state => ev.target.value);

    const submitHandle = (ev) => {
        ev.preventDefault();
        fetchSearch(searchInput);
    }

    useEffect(() => {
        if (fetchApiStatus === apiStatus.rejected && error === apiResponse.notFound) {
            navigate(url.searchNotFound);
            setLocalStorage(localStorageVariable.search, searchInput);
        } else if(fetchApiStatus === apiStatus.rejected && error !== apiResponse.notFound) {
            alert.error(error)
        }
    }, [fetchApiStatus])

    return (
        <form onSubmit={submitHandle} className={css.search}>
            <div className={css.search__dropdown}>
                <Dropdown
                    id='search23'
                    selectedItem={searchTypeSelectd}
                    list={list}
                    onChange={searchTypeChangeHandle}
                />
            </div>
            <input
                type="text"
                placeholder='Search by Address / Txn Hash / Block / Token / Domain Name'
                onChange={searchInputChangeHandle}
                value={searchInput}
            />
            <Button2
                loading={fetchApiStatus === apiStatus.fetching}
                htmlType={button2HtmlType.submit}
                type={button2Type.primarySmall}
            >
                <IoSearchSharp />
            </Button2>
        </form>
    )
}

export default Search