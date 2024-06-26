import css from './list-tabs.module.scss';
import PropTypes from 'prop-types';

function ListTabs(props) {
	const {
		list,
		selectedItem,
		onChange
	} = props;

	const renderList = () =>
		list.map((item) => (
			<li
				onClick={itemClickHandle.bind(null, item)}
				key={item.id}
				className={`${css.listTabs__item} ${renderClassActive(item.id)}`}
			>
				{item.content}
			</li>
		));

	const renderClassActive = (id) =>
		id === selectedItem?.id ? css.active : '';
	const itemClickHandle = (item) => {
		onChange(item);
	};
	return <ul className={css.listTabs}>{renderList()}</ul>;
}

ListTabs.propTypes = {
	list: PropTypes.array,
	selectedItem: PropTypes.object,
	onChange: PropTypes.func,
};

export default ListTabs;
