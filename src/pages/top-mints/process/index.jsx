import css from './process.module.scss';
import PropTypes from 'prop-types';

function Process(props) {
	const {number, percent} = props;
	return (
		<div className={css.process}>
			<div className={css.process__left}>
				<span>{number}</span>
				<span className='--text-gray'>({percent}%)</span>
			</div>
			<div className={css.process__right}>
				<div
					style={{width: percent + '%'}}
					className={css.process__right__bar}
				></div>
			</div>
		</div>
	);
}

Process.propTypes = {
	number: PropTypes.number,
	percent: PropTypes.number,
};

export default Process;
