import css from "./section-button-info.module.scss";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import PropTypes from 'prop-types';

function SectionButtonInfo(props) {
    const { isShowInfo, setIsShowInfo } = props;

    const toggleInfoClickHandle = () => {
        setIsShowInfo(s => !s);
    }
    const renderShowInfo = () => {
        return isShowInfo ? '' : 'd-0';
    }
    const renderHideInfo = () => {
        return isShowInfo ? 'd-0' : '';
    }

    return (
        <div><span className={`${css.sectionButtonInfo}`}>
            <div onClick={toggleInfoClickHandle} className={`${css.sectionButtonInfo__show} ${renderHideInfo()}`}>
                <span>Info</span>
                <span><FaAngleDown /></span>
            </div>
            <div onClick={toggleInfoClickHandle} className={`${css.sectionButtonInfo__show} ${renderShowInfo()}`}>
                <span>Hide</span>
                <span><FaAngleUp /></span>
            </div>
        </span></div>
    )
}

SectionButtonInfo.propTypes = {
    isShowInfo: PropTypes.bool,
    setIsShowInfo: PropTypes.func,
}

export default SectionButtonInfo;