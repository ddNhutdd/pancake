import Button2, { button2Type } from 'src/components/button-2';
import css from './search.module.scss';
import { IoSearchSharp } from "react-icons/io5";
import { Dropdown } from 'src/components/dropdown';
import { useState } from 'react';

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

    const [searchTypeSelectd, setSearchTypeSelectd] = useState(list.at(0))

    const searchTypeChangeHandle = (item, ev) => {
        ev.stopPropagation();
        setSearchTypeSelectd(item);
    }

    return (
        <form className={css.search}>
            <div className={css.search__dropdown}>
                <Dropdown id='search23' selectedItem={searchTypeSelectd} list={list} onChange={searchTypeChangeHandle} />
            </div>
            <input type="text" placeholder='Search by Address / Txn Hash / Block / Token / Domain Name' />
            <Button2 type={button2Type.primarySmall}>
                <IoSearchSharp />
            </Button2>
        </form>
    )
}

export default Search