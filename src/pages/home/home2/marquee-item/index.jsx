import css from './marquee-item.module.scss';
import PropTypes from 'prop-types';

function MarqueeItem(props) {
	const {text, icon, color, textColor} = props;
	return (
		<div
			style={{backgroundColor: color}}
			className={css['marquee__item']}
		>
			<div className={css['marquee__item__icon']}>{icon}</div>
			<div
				style={{color: textColor}}
				className={css['marquee__item__text']}
			>
				{text}
			</div>
		</div>
	);
}

MarqueeItem.defaultProps = {
	text: '',
	icon: '',
	color: '',
	textColor: '#FFF',
};
MarqueeItem.prototype = {
	text: PropTypes.string,
	color: PropTypes.string,
	textColor: PropTypes.string,
};

export default MarqueeItem;
