import css from './radio-button.module.scss';
import PropTypes from 'prop-types';
import {forwardRef} from 'react';

const RadioButton = forwardRef((props, ref) => {
	const {name, children, id, checked, onChange} = props;

	const inputOnChangeHandle = (ev) => onChange(ev);

	return (
		<div className={css.radioButton}>
			<input
				ref={ref}
				type='radio'
				className='d-0'
				id={id}
				name={name}
				checked={checked}
				onChange={inputOnChangeHandle}
			/>
			<label
				className={css.radioButton__container}
				htmlFor={id}
			>
				<div className={css.radioButton__circal}>
					<div className={css.radioButton__dot}></div>
				</div>
				{children}
			</label>
		</div>
	);
});

RadioButton.propTypes = {
	name: PropTypes.string,
	children: PropTypes.node,
	id: PropTypes.string,
	checked: PropTypes.bool,
	onChange: PropTypes.func,
};

export default RadioButton;
