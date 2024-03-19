import Button2, { button2Type } from '../button-2';
import css from './paging-2.module.scss';
import { HiOutlineChevronLeft } from "react-icons/hi2";
import { HiOutlineChevronRight } from "react-icons/hi2";
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

function Paging2(props) {
    const { page, onChange, totalPage } = props;

    const [disablePrev, setDisablePrev] = useState(true);
    const [disableNext, setDisableNext] = useState(false);

    const firstClickHandle = () => {
        setDisableButton(1);
        onChange(1);
    }
    const lastClickHandle = () => {
        setDisableButton(totalPage);
        onChange(totalPage);
    }
    const prevClickHandle = () => {
        const newPage = page - 1;
        if (newPage <= 0) return;

        setDisableButton(newPage);
        onChange(newPage);
    }
    const nextClickHandle = () => {
        const newPage = page + 1;
        if (newPage > totalPage) return;

        setDisableButton(newPage);

        onChange(newPage);
    }
    const setDisableButton = (newPage) => {
        if (newPage === 1) {
            setDisablePrev(true);
        } else {
            setDisablePrev(false);
        }

        if (newPage === totalPage) {
            setDisableNext(true);
        } else {
            setDisableNext(false);
        }
    }

    useEffect(() => {
        setDisableButton(page)
    }, [page])

    return (
        <div className={css.paging2}>
            <Button2
                disabled={disablePrev}
                classname={css.paging2__button}
                onClick={firstClickHandle}
                type={button2Type.outlineSmall}>
                First
            </Button2>
            <Button2
                disabled={disablePrev}
                classname={css.paging2__button}
                onClick={prevClickHandle}
                type={button2Type.outlineSmall}>
                <HiOutlineChevronLeft />
            </Button2>
            <Button2
                disabled={true}
                classname={css.paging2__button}
                type={button2Type.outlineSmall}>
                Page {page} of {totalPage}
            </Button2>
            <Button2
                disabled={disableNext}
                classname={css.paging2__button}
                onClick={nextClickHandle}
                type={button2Type.outlineSmall}>
                <HiOutlineChevronRight />
            </Button2>
            <Button2
                disabled={disableNext}
                classname={css.paging2__button}
                onClick={lastClickHandle}
                type={button2Type.outlineSmall}>
                Last
            </Button2>
        </div>
    )
}

Paging2.propTypes = {
    page: PropTypes.number,
    onChange: PropTypes.func,
    totalPage: PropTypes.number
};


export default Paging2