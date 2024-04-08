import css from './process.module.scss';
import PropTypes from 'prop-types';

function Process(props) {
	const {percent, number} = props;
	return (
		<div className={css.process}>
			<div className={css.process__top}>
				<span>{number}</span>
				<span>({percent}%)</span>
			</div>
			<div className={css.process__bot}>
				<div
					style={{width: percent + '%'}}
					className={css.process__bar}
				></div>
			</div>
		</div>
	);
}

Process.propTypes = {
	percent: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

	number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Process;
