import PropTypes from 'prop-types';
import css from './header-component-3.module.scss';
import Card from '../card';
import {MdOutlineArrowOutward} from 'react-icons/md';

export const HeaderComponent3 = (props) => {
	const {listCard} = props;

	const renderListCard = () => {
		if (!listCard || listCard.length <= 0) {
			return;
		}

		return listCard.map((item) => (
			<Card
				key={item.id}
				className={css.headerComponent3__card}
			>
				<div className={css.headerComponent3__main}>{item.main}</div>
				<div className={css.headerComponent3__second}>
					<span>{item.second}</span>
					<span>{item.second_2}</span>
				</div>
				<div className={css.headerComponent3__arrow}>
					<MdOutlineArrowOutward />
				</div>
			</Card>
		));
	};
	return <div className={css.headerComponent3}>{renderListCard()}</div>;
};

HeaderComponent3.propTypes = {
	listCard: PropTypes.array,
};
