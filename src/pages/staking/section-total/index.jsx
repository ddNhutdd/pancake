import css from "./section-total.module.scss";
import PropTypes from 'prop-types';
import { useRef, useCallback } from 'react'
import { useCountUp } from "react-countup";
import { useTheme } from 'context/dark-theme'

function SectionTotal(props) {
    const { total, token, totalEstimate } = props;

    const { isDarkMode } = useTheme();

    const totalEstimateElement = useRef(null);

    useCallback(
        useCountUp({
            ref: totalEstimateElement,
            end: totalEstimate,
            start: 0,
            duration: 5,
            separator: ",",
            decimals: 2,
        }),
        []
    );

    const renderDarkTheme = () => {
        return isDarkMode ? css.dark : '';
    }

    return (
        <div className={`${css.SectionTotal} ${renderDarkTheme()}`}>
            <div>
                {`${total} ${token}`}
            </div>
            <div>~<span ref={totalEstimateElement}></span>{` USD`}</div>
        </div>
    )
}

SectionTotal.propTypes = {
    total: PropTypes.node,
    token: PropTypes.node,
    totalEstimate: PropTypes.node,

}

export default SectionTotal