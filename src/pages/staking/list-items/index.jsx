import Item from './item';
import css from './list-items.module.scss';
import PropTypes from 'prop-types';
import {useTheme} from 'context/dark-theme';

function ListItems(props) {
	const {list} = props;

	const {isDarkMode} = useTheme();

	const renderItem = () => {
		return list.map((item, index) => (
			<div
				key={index}
				className={`${css.item}`}
			>
				<Item content={item}></Item>
			</div>
		));
	};
	const renderDarkTheme = () => {
		return isDarkMode ? css.dark : '';
	};

	return (
		<div className={`${css.listItems} ${renderDarkTheme()}`}>
			{renderItem()}
		</div>
	);
}

ListItems.propTypes = {
	list: PropTypes.array,
};

export default ListItems;
