import { AiOutlineCalculator } from "react-icons/ai";
import css from "./section-info.module.scss";
import { MdStars } from "react-icons/md";
import PropTypes from 'prop-types';
import { useTheme } from "context/dark-theme"

function SectionInfo(props) {
    const { isShowInfo, periods } = props;

    const { isDarkMode } = useTheme();

    const renderInfoRow = (periodsList) => {
        return periodsList.map(([item1, item2, item3], index) => (<div key={index} className={`${css.sectionInfo}`}>
            <div className={`${css.SectionInfo__left}`}>{item1}D APR:</div>
            <div className={`${css.SectionInfo__right}`}>
                <span><MdStars /></span>
                <span>Up to {item2}%</span>
                <span>{item3}%</span>
                <span><AiOutlineCalculator /></span>
            </div>
        </div>))
    }
    const renderHideInfo = () => {
        return isShowInfo ? '' : 'd-0';
    }
    const renderDarkTheme = () => {
        return isDarkMode ? css.dark : '';
    }

    return (
        <div className={`${renderHideInfo()} ${css.sectionInfo__container} ${renderDarkTheme()}`}>
            {renderInfoRow(periods)}
        </div>
    )
}

SectionInfo.propTypes = {
    isShowInfo: PropTypes.bool,
    periods: PropTypes.array
}

export default SectionInfo