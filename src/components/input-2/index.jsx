import css from './input-2.module.scss';
import PropTypes from 'prop-types';
import {forwardRef} from 'react';

const Input2 = forwardRef((props, ref) => {
	const {value, icon} = props;

	return (
		<div className={css.input2}>
			<input
				ref={ref}
				value={value}
				type='text'
			/>
			{icon && <div>{icon}</div>}
		</div>
	);
});

Input2.propTypes = {
	value: PropTypes.string,
	icon: PropTypes.node,
};

export default Input2;
