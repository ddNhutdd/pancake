import React from 'react';
import css from './marquee-item.module.scss';
import {useTheme} from 'src/context/dark-theme';

function MarqueeItem(props) {
	const {icon, text} = props;

	const {isDarkMode} = useTheme();

	const renderDarkMode = () => {
		return isDarkMode ? css.dark : '';
	};

	return (
		<div className={`${css.marqueeItem} ${renderDarkMode()}`}>
			{icon} {text}
		</div>
	);
}

export default MarqueeItem;
