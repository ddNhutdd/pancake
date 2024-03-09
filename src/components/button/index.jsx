import css from './button.module.scss';
import PropTypes from 'prop-types';

export const buttonClassesType = {
	primary: 'primary',
	primaryThin: 'primaryThin',
	secondThin: 'secondaryThin',
	outline: 'outline',
};

function Button(props) {
	const {type, children, style, className, isDark} = props;

	const getButtonClasses = (type) => {
		switch (type) {
			case buttonClassesType.primary:
				return 'button-primary';

			case buttonClassesType.primaryThin:
				return 'button-primaryThin';

			case buttonClassesType.secondThin:
				return 'button-secondThin';

			case buttonClassesType.outline:
				return 'button-outline';

			default:
				return 'button-primary';
		}
	};

	const renderDark = () => {
		return isDark ? css.dark : '';
	};

	return (
		<button
			style={style}
			className={`${css[getButtonClasses(type)]} ${renderDark()} ${className}`}
		>
			{children}
		</button>
	);
}

Button.propDefault = {
	type: buttonClassesType.primary,
	className: '',
	isDark: false,
};

Button.propTypes = {
	type: PropTypes.oneOf(Object.values(buttonClassesType)),
	style: PropTypes.object,
	children: PropTypes.node,
	className: PropTypes.string,
	isDark: PropTypes.bool,
};

export default Button;
