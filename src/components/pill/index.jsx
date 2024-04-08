import css from './pill.module.scss';
import PropTypes from 'prop-types';

export const pillTypes = {
	blue: 'blue',
	white: 'white',
	gray: 'gray',
};

function Pill(props) {
	const {children, type, className} = props;

	const renderType = () => {
		switch (type) {
			case pillTypes.blue:
				return css.blue;
			case pillTypes.white:
				return css.white;
			case pillTypes.gray:
				return css.gray;
			default:
				return css.blue;
		}
	};

	return (
		<div className={`${css.pill} ${renderType()} ${className}`}>
			{children}
		</div>
	);
}

Pill.propTypes = {
	children: PropTypes.node,
	type: PropTypes.oneOf(Object.values(pillTypes)),
	className: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Pill.defaultProps = {
	type: pillTypes.blue,
};

export default Pill;
