import {useState} from 'react';
import css from './header-time.module.scss';
import PropTypes from 'prop-types';

function HeaderTime(props) {
	const {list} = props;

	const [timeSelected, setTimeSelected] = useState(Object.values(list)[0]);

	const renderTimeSelectActive = (value) => {
		return timeSelected === value ? css.active : '';
	};
	const timeItemClickHandle = (value) => {
		setTimeSelected(value);
	};
	const renderListItem = () => {
		return Object.entries(list)?.map(([key, value]) => {
			return (
				<li
					key={key}
					onClick={timeItemClickHandle.bind(null, value)}
					className={renderTimeSelectActive(value)}
				>
					{value}
				</li>
			);
		});
	};

	return (
		<div className={css.nftTop__timeContainer}>
			<ul className={css.nftTop__time}>{renderListItem()}</ul>
		</div>
	);
}

HeaderTime.propTypes = {
	list: PropTypes.object,
};

export default HeaderTime;
