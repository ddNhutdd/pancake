import { useEffect, useRef, useState } from "react";
import { Dropdown } from "../dropdown";
import Paging2 from "../paging-2";
import css from "./table.module.scss"
import Loader from "../loader";
import Empty from "../empty";
import PropTypes from 'prop-types';

function Table(props) {
    const { listCol, listRecord, fetching } = props;
    const listShowRow = [
        {
            id: 1,
            content: '10'
        },
        {
            id: 2,
            content: '25'
        },
        {
            id: 3,
            content: '50'
        },
        {
            id: 4,
            content: '100'
        },

    ]

    const totalCol = useRef(0);

    const [page, setpage] = useState(1);
    const [totalPage] = useState(90);
    const [dropdownRowSelected, setDropdownRowSelected] = useState(listShowRow.at(0));

    const pageChangeHandle = (page) => {
        setpage(page)
    }
    const dropdownRowChangeHandle = (item) => {
        setDropdownRowSelected(item)
    }
    const renderShowFetching = () => {
        return fetching ? '' : 'd-0';
    }
    const renderShowEmpty = () => {
        return (!listRecord || listRecord.length <= 0) && fetching !== true ? '' : 'd-0';
    }
    const renderMainData = () => {
        return listRecord && listRecord.length > 0 && fetching !== true ? '' : 'd-0';
    }
    const renderTableHeader = () => {
        if (!listCol || listCol.length <= 0) {
            return;
        }

        return listCol.map((item) => (
            <th key={item.id}>
                {item.header}
            </th>
        ))
    }
    const renderTableBody = () => {
        if (!listRecord || listRecord.length <= 0) {
            return;
        }

        const renderCol = (arr) => arr.map((item, index) => <td key={index}>{item}</td>)

        return listRecord.map((item) => (
            <tr key={item.id}>
                {
                    renderCol(item.cols)
                }
            </tr>
        ))
    }

    useEffect(() => {
        totalCol.current = listCol?.length || 0;
    }, [listCol])

    return (
        <div className={css.table}>
            <div className={css.table__header}>
                <div className={css.table__header__left}>
                    <div>
                        More than 5,506,373,037 transactions found
                    </div>
                    <div>
                        (Showing the last 500k records)
                    </div>
                </div>
                <div className={css.table__header__right}>
                    <Paging2
                        page={page}
                        totalPage={totalPage}
                        onChange={pageChangeHandle} />
                </div>
            </div>
            <div className={css.table__container}>
                <table>
                    <thead>
                        <tr>
                            {renderTableHeader()}
                        </tr>
                    </thead>
                    <tbody className={renderMainData()}>
                        {renderTableBody()}
                    </tbody>
                    <tbody className={renderShowFetching()}>
                        <tr>
                            <td colSpan={totalCol.current}>
                                <Loader />
                            </td>
                        </tr>
                    </tbody>
                    <tbody className={renderShowEmpty()}>
                        <tr>
                            <td colSpan={totalCol.current}>
                                <Empty />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className={css.table__footer}>
                <div className={css.table__footer__left}>
                    <span>
                        Show rows:
                    </span>
                    <span>
                        <Dropdown
                            id={`transactionRowDropdownd`}
                            selectedItem={dropdownRowSelected}
                            onChange={dropdownRowChangeHandle}
                            list={listShowRow} />
                    </span>
                </div>
                <div className={css.table__footer__right}>
                    <Paging2
                        page={page}
                        totalPage={totalPage}
                        onChange={pageChangeHandle} />
                </div>
            </div>
        </div>
    )
}

Table.propTypes = {
    listCol: PropTypes.array,
    listRecord: PropTypes.array,
    fetching: PropTypes.bool
};

Table.defaultProps = {
    fetching: false
};

export default Table