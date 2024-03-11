import css from "./cards.module.scss";
import PropTypes from 'prop-types';
import { MdStars } from "react-icons/md";
import Button from 'components/button';
import { useState } from 'react';
import { useTheme } from "context/dark-theme";
import SectionRange from "src/pages/staking/section-range";
import SectionPeriods from "../../section-periods";
import SectionTotal from "../../section-total";
import SectionButtonInfo from "../../section-button-info";
import SectionInfo from "../../section-info";

function Card(props) {
    const { content } = props;

    const { isDarkMode } = useTheme();

    const [isShowInfo, setIsShowInfo] = useState(false);

    const renderDarkTheme = () => {
        return isDarkMode ? css.dark : ''
    }

    return (
        <div className={`${css.card} ${renderDarkTheme()}`}>
            <div className={`${css.card__header}`}>
                <div className={`${css.card__header__left}`}>
                    <img src={content.image} alt={content.image} />
                </div>
                <div className={`${css.card__header__right}`}>
                    <div className={`${css.card__header__right__token}`}>
                        {content.token}
                    </div>
                    <div className={`${css.card__header__right__content}`}>
                        <span><MdStars /></span>
                        <span>Looked Cake Boost</span>
                    </div>
                </div>
            </div>
            <div className={`${css.card__body}`}>
                <div className={`${css.card__body__row}`}>
                    <div className={`${css.card__body__row__left}`}>APR:</div>
                    <SectionRange min={content.aprMin} max={content.aprMax} />
                </div>
                <div className={`${css.card__body__row}`}>
                    <div className={`${css.card__body__row__left}`}>Stake Periods:</div>
                    <SectionPeriods periods={content.periods} />
                </div>
                <div className={`${css.card__body__row}`}>
                    <div className={`${css.card__body__row__left}`}>Total Staked:</div>
                    <SectionTotal total={content.total} token={content.token} totalEstimate={content.totalEstimate} />
                </div>
                <Button isDark={isDarkMode} className="w-100">Connect Wallet</Button>
                <SectionButtonInfo isShowInfo={isShowInfo} setIsShowInfo={setIsShowInfo} />
                <SectionInfo isShowInfo={isShowInfo} periods={content.periods} />
            </div>
        </div>
    )
}

Card.propTypes = {
    content: PropTypes.object,
}

export default Card