import PropTypes from 'prop-types';
import css from './grid-cards.module.scss';
import Card from './cards';

function GridCards(props) {
	const {list} = props;

	const renderList = () => {
		return list.map((item) => (
			<div
				className={css.card}
				key={item.id}
			>
				<Card content={item} />
			</div>
		));
	};

	return <div className={`${css.gridCards}`}>{renderList()}</div>;
}

GridCards.propTypes = {
	list: PropTypes.array,
};

export default GridCards;
