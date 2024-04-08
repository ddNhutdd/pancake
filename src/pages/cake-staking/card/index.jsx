import PropTypes from 'prop-types';
import css from './card.module.scss';
import Button, {buttonClassesType} from 'src/components/button';
import {useTheme} from 'context/dark-theme';

function Card(props) {
	const {img, title, smallTitle, number, info, action, outline_button} =
		props;

	const {isDarkMode} = useTheme();

	const renderInfoRecord = () => {
		if (!info || info.length <= 0) return;
		return info.map((item, index) => <li key={index}>{item}</li>);
	};
	const renderStyle = () => {
		return outline_button
			? buttonClassesType.outline
			: buttonClassesType.primary;
	};
	const renderUnderline = () => {
		return outline_button ? css['--underline'] : '';
	};
	const renderDarkTheme = () => {
		return isDarkMode ? css.dark : '';
	};
	const renderButtonDark = () => {
		return outline_button ? false : isDarkMode;
	};

	return (
		<div className={`${css.card} ${renderDarkTheme()}`}>
			<div className={css.card__logo}>
				<img
					src={img}
					alt={title}
				/>
			</div>
			<div className={css.card__mainContent}>
				<div>{title}</div>
				<div>{smallTitle}</div>
				<div>{number}</div>
			</div>
			<ul className={css.card__info}>{renderInfoRecord(info)}</ul>
			<div className={`${css.card__action} ${renderUnderline()}`}>
				<Button
					isDark={renderButtonDark()}
					type={renderStyle()}
					className={`w-100 `}
				>
					{action}
				</Button>
			</div>
		</div>
	);
}

Card.propTypes = {
	img: PropTypes.node,
	title: PropTypes.node,
	smallTitle: PropTypes.string,
	number: PropTypes.string,
	info: PropTypes.array,
	action: PropTypes.string,
	outline_button: PropTypes.bool,
};

export default Card;
