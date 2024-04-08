import {forwardRef, useState} from 'react';
import css from './input-3.module.scss';
import {LuEye} from 'react-icons/lu';
import {LuEyeOff} from 'react-icons/lu';
import Button2, {button2Type} from '../button-2';
import PropTypes from 'prop-types';

export const input3Type = {
	text: 'text',
	password: 'password',
};

const Input3 = forwardRef((props, ref) => {
	const {
		placeholder,
		type,
		errorText,
		max,
		min,
		require,
		id,
		onChange,
		regular,
		asame,
	} = props;

	const [showPassword, setShowPassword] = useState(
		type === input3Type.password,
	);

	const renderClassShowEyeWithType = () => {
		return type === input3Type.password ? '' : 'd-0';
	};
	const handleShowPassword = () => {
		setShowPassword(!showPassword);
	};
	const renderClassErr = () => {
		return errorText ? css.err : '';
	};

	return (
		<div className={css.inputContainer}>
			<div className={css.input}>
				<input
					id={id}
					onChange={onChange}
					data-max={JSON.stringify(max)}
					data-min={JSON.stringify(min)}
					data-require={JSON.stringify(require)}
					data-regular={JSON.stringify(regular)}
					data-asame={JSON.stringify(asame)}
					className={renderClassErr()}
					placeholder={placeholder}
					ref={ref}
					type={showPassword ? 'password' : 'text'}
				/>
				<div
					className={`${css.input__eye} ${renderClassShowEyeWithType()} `}
				>
					<Button2
						onClick={handleShowPassword}
						type={button2Type.outlineSmall}
					>
						{showPassword ? <LuEyeOff /> : <LuEye />}
					</Button2>
				</div>
			</div>
			<div className={css.input__error}>{errorText}</div>
		</div>
	);
});

Input3.defaultProps = {
	type: input3Type.text,
	errorText: '',
};

Input3.propTypes = {
	placeholder: PropTypes.string,
	type: PropTypes.oneOf(Object.values(input3Type)),
	errorText: PropTypes.string,
	max: PropTypes.array,
	min: PropTypes.array,
	id: PropTypes.string,
	onChange: PropTypes.func,
	require: PropTypes.array,
	regular: PropTypes.array,
	asame: PropTypes.array,
};

export default Input3;
