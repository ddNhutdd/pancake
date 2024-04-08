import Button2, { button2HtmlType, button2Type } from 'src/components/button-2';
import css from './search.module.scss';
import { IoSearchSharp } from "react-icons/io5";
import { Dropdown } from 'src/components/dropdown';
import { useState } from 'react';
import { apiResponse, apiStatus, localStorageVariable, searchType, url, urlParams } from 'src/constants';
import { search } from 'src/services/explorer.services';
import { useNavigate } from 'react-router-dom';
import useAlert from 'hooks/alert';
import { setLocalStorage } from 'src/utils';

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
    const [searchTypeSelectd, setSearchTypeSelectd] = useState(list.at(0));
    const [searchInput, setSearchInput] = useState('');
    const [fetchApiStatus, setFetchApiStatus] = useState(apiStatus.pending);

    const searchTypeChangeHandle = (item, ev) => {
        ev.stopPropagation();
        setSearchTypeSelectd(item);
    }
    const searchInputChangeHandle = (ev) => setSearchInput(state => ev.target.value);

    const submitHandle = async (ev) => {
        ev.preventDefault();
        try {
            if (fetchApiStatus === apiStatus.fetching) return;
            setFetchApiStatus(state => apiStatus.fetching);
            const resp = await search(searchInput);
            const data = JSON.parse(resp?.data?.data);
            setFetchApiStatus(apiStatus.fullfiled);
            redirectPage(data)
        } catch (error) {
            const errorMess = error?.response?.data?.message;
            setFetchApiStatus(apiStatus.rejected);
            if (errorMess === apiResponse.notFound) {
                navigate(url.searchNotFound);
                setLocalStorage(localStorageVariable.search, searchInput);
            } else {
                alert.error(errorMess || error)
            }
        }
    }
    const redirectPage = (searchData) => {
        switch (searchData.type) {
            case searchType.block:
                navigate(url.blockDetail.replace(urlParams.blockNumber, searchData.blockNumber));
                return;
            case searchType.transaction:
                navigate(url.transactionDetail.replace(urlParams.transactionNumber, searchData.transactionHash));
                return;
            case searchType.addressEoa:
                navigate(url.addressDetail.replace(urlParams.addressNumber, searchData.address));
                return;
            default:
                break;
        }
    }

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
            <Button2 htmlType={button2HtmlType.submit} type={button2Type.primarySmall}>
                <IoSearchSharp />
            </Button2>
        </form>
    )
}

export default Search