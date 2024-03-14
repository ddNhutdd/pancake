import PropTypes from 'prop-types';
import css from './button.module.scss'
import { forwardRef } from 'react';

export const buttonClassesType = {
	primary: 'primary',
	primaryThin: 'primaryThin',
	secondThin: 'secondaryThin',
	outline: 'outline',
};

const Button = forwardRef((props, ref) => {
	const { type, children, style, className, isDark, onClick } = props;

	const getButtonClasses = (type) => {
		switch (type) {
			case buttonClassesType.primary:
				return css['button-primary'];
			case buttonClassesType.primaryThin:
				return css['button-primaryThin'];
			case buttonClassesType.secondThin:
				return css['button-secondThin'];
			case buttonClassesType.outline:
				return css['button-outline'];
			default:
				return css['button-primary'];
		}
	};

	const renderDark = () => {
		return isDark ? ' button-dark' : '';
	};

	return (
		<button
			ref={ref}
			onClick={onClick}
			style={style}
			className={`${getButtonClasses(type)} ${renderDark()} ${className}`}
		>
			{children}
		</button >
	);
});

Button.propDefault = {
	type: buttonClassesType.primary,
	className: '',
	isDark: false,
	onclick: () => { }
};

Button.propTypes = {
	type: PropTypes.oneOf(Object.values(buttonClassesType)),
	style: PropTypes.object,
	children: PropTypes.node,
	className: PropTypes.string,
	isDark: PropTypes.bool,
	onClick: PropTypes.func
};

export default Button;