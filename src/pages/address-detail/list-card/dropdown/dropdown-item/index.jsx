import css from './dropdown-item.module.scss';

const DropdownItem = function (props) {
	const {content} = props;

	return (
		<>
			<div className={css.dropdownItem}>
				<div className={css.dropdownItem__left}>{content.left}</div>
				<div className={css.dropdownItem__left}>{content.right}</div>
			</div>
			<div className={css.dropdownItem__line}></div>
		</>
	);
};

export default DropdownItem;
