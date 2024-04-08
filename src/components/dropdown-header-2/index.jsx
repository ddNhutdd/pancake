import React from 'react';
import css from './dropdown-header-2.module.scss';
import {useTheme} from 'src/context/dark-theme';

export const dropdownItemAlignType = {
	left: 'left',
	center: 'center',
};

function DropdownHeader2(props) {
	const {list, header, dropdownItemAlign, positionMenu} = props;
	const {isDarkMode} = useTheme();

	const renderList = function () {
		if (!list || list.length <= 0) return <></>;
		return list.map((item, index) => {
			return (
				<div
					key={item.id}
					className={`${css['dropdownHeader2__item']} ${renderHover(
						item.noneHover,
					)} flex items-center gap-1 ${alignItems()} ${renderBorderBottom(
						item.borderBottom,
					)}`}
				>
					{renderImage(item.image)}
					<span>{item.content}</span>
				</div>
			);
		});
	};
	const alignItems = function () {
		switch (dropdownItemAlign) {
			case dropdownItemAlignType.left:
				return 'justify-start';
			case dropdownItemAlignType.center:
				return 'justify-center';
			default:
				return '';
		}
	};
	const renderBorderBottom = function (value) {
		if (value === null || value === undefined) return '';
		return value ? css.border : '';
	};
	const renderHover = function (value) {
		if (value === null || value === undefined) return 'hover-p';
		return value ? '' : 'hover-p';
	};
	const renderImage = function (value) {
		if (value === null || value === undefined) return '';
		return (
			<span>
				<img
					src={value}
					alt={value}
				/>
			</span>
		);
	};
	const renderDarkTheme = () => {
		return isDarkMode ? css.dark : '';
	};

	return (
		<div className={`${css['dropdownHeader2']} ${renderDarkTheme()}`}>
			<div className={css['dropdownHeader2__header']}>{header}</div>
			<div
				style={positionMenu}
				className={css['dropdownHeader2__menuContainer']}
			>
				<div
					className={css['dropdownHeader2__menu'] + ` border-1 py-1`}
				>
					{renderList()}
				</div>
			</div>
		</div>
	);
}

DropdownHeader2.defaultProps = {
	header: '',
	list: [],
	dropdownItemAlign: dropdownItemAlignType.center,
	positionMenu: {},
};

export default DropdownHeader2;
