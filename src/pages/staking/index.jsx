import css from "./staking.module.scss";
import { useState } from 'react';
import ListCards from './list-cards';
import ListItems from "./list-items";
import { FaList } from "react-icons/fa";
import { BsFillGrid3X2GapFill } from "react-icons/bs";

function Staking() {

    const list = [];

    const [isShowCard, setIsShowCard] = useState(true);

    const renderMainData = () => {
        return isShowCard ? <ListCards list={list} /> : <ListItems list={list} />
    }

    return (
        <div className={css.staking}>
            <div className={css.staking__header}>
                <div className={css.staking__header__container}>
                    <div className={css.staking__header__big}>Simple Staking</div>
                    <div className={css.staking__header__small}>Single-Sided Simple Earn Staking</div>
                </div>
            </div>
            <div className={css.staking__content}>
                <div className={css.staking__content__container}>
                    <div className={css.staking__content__actions}>
                        <BsFillGrid3X2GapFill />
                        <FaList />
                    </div>
                    <div className={css.staking__content__main}>
                        {renderMainData()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Staking;