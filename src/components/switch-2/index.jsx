import css from './switch-2.module.scss';
import PropTypes from 'prop-types';

function Switch2(props) {
	const {active, setActive} = props;

	const renderActive = () => {
		return active ? css.active : '';
	};
	const switchClickHandle = () => {
		setActive((s) => !s);
	};

	return (
		<div
			onClick={switchClickHandle}
			className={`${css.switch} ${renderActive()}`}
		>
			<div className={css.switch__ball}></div>
		</div>
	);
}

Switch2.propTypes = {
	active: PropTypes.bool,
	setActive: PropTypes.func,
};

export default Switch2;
