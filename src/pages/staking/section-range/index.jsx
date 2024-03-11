import css from "./section-range.module.scss";
import PropTypes from 'prop-types';
import { AiOutlineCalculator } from "react-icons/ai";
import { useTheme } from "src/context/dark-theme";

function SectionRange(props) {
    const { min, max } = props;

    const { isDarkMode } = useTheme();

    const renderDarkMode = () => {
        return isDarkMode ? css.dark : '';
    }

    return (
        <div className={`${css.SectionRange} ${renderDarkMode()}`}>
            <span>{min}% ~ {max}%</span>
            <span><AiOutlineCalculator /></span>
        </div>
    )
}

SectionRange.propTypes = {
    min: PropTypes.node,
    max: PropTypes.node,
}

export default SectionRange