import css from './pill-square.module.scss';
import PropTypes from 'prop-types';

export const pillSquareType = {
	normal: 'normal',
	green: 'green'
}

const PillSquare = function (props) {
	const {
		children,
		className,
		type,
		onClick
	} = props;

	const renderType = () => {
		switch (type) {
			case pillSquareType.normal:
				return css.normal;
			case pillSquareType.green:
				return css.green;
			default:
				break;
		}
	}

	return (
		<div
			onClick={onClick}
			className={`${css.pillSquare} ${className} ${renderType()}`}
		>
			{children}
		</div>
	)
}

PillSquare.propTypes = {
	children: PropTypes.node,
	className: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object
	]),
};

export default PillSquare;