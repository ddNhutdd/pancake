import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import css from './paging.module.scss';
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

function Paging(props) {
    const { totalItems, pageSize, currentPage, onChange } = props;

    const totalPage = useRef(Math.ceil(totalItems / pageSize));
    const [currentPageInner, setCurrentPageInner] = useState(currentPage);

    const nextClickHandle = (ev) => {
        const element = ev.currentTarget;
        if (element.classList.contains(css.disable)) return;
        //
        let newPage = currentPageInner + 1;
        if (newPage > totalPage.current) return;
        //
        if (newPage === totalPage.current) {
            !element.classList.contains(css.disable) && element.classList.add(css.disable)
        }
        //
        setCurrentPageInner(newPage);
        onChange(newPage);
    }
    const preClickHandle = (ev) => {
        const element = ev.currentTarget;
        if (element.classList.contains(css.disable)) return;
        //
        let newPage = currentPageInner - 1;
        if (newPage <= 0) return;
        setCurrentPageInner(newPage);
        onChange(newPage);
    }

    return (
        <div className={css.paging}>
            <span onClick={preClickHandle}><FaArrowLeft /></span>
            <span>{`Page ${currentPageInner} of ${totalPage.current}`}</span>
            <span onClick={nextClickHandle}><FaArrowRight /></span>
        </div>
    )
}

Paging.defaultProps = {
    pageSize: 10,
    currentPage: 1,
    totalItems: 0,
    onChange: () => { }
}

Paging.propTypes = {
    totalItems: PropTypes.number,
    pageSize: PropTypes.number,
    currentPage: PropTypes.number,
    onChange: PropTypes.func
}

export default Paging