import css from './section-periods.module.scss';
import PropTypes from 'prop-types';
import {useTheme} from 'src/context/dark-theme';

function SectionPeriods(props) {
	const {periods} = props;

	const {isDarkMode} = useTheme();

	const renderPeriods = (list) => {
		return list.map(([item], index) => <span key={index}>{item}D</span>);
	};
	const renderDarkTheme = () => {
		return isDarkMode ? css.dark : '';
	};

	return (
		<div className={`${css.sectionPeriods} ${renderDarkTheme()}`}>
			{renderPeriods(periods)}
		</div>
	);
}

SectionPeriods.propTypes = {
	periods: PropTypes.array,
};

export default SectionPeriods;
