import css from './list-card.module.scss';
import PropTypes from 'prop-types';
import { addressDetailType, searchType } from 'src/constants';
import NotToken from './not-token';
import Token from './token';

const ListCard = function (props) {
	const {
		type,
		content,
		bnbToUsd
	} = props;

	const renderContent = () => {
		switch (type) {
			case addressDetailType.contract:
			case addressDetailType.address:
				return <NotToken
					type={type}
					content={content}
					bnbToUsd={bnbToUsd}
				/>

			case addressDetailType.token:
				return <Token
					content={content}
				/>;
			default:
				break;
		}
	}

	return (
		<div className={css.listCard}>
			{renderContent()}
		</div>
	);
};

ListCard.propTypes = {
	type: PropTypes.oneOf(Object.values(addressDetailType)),
	content: PropTypes.object,
	bnbToUsd: PropTypes.number
};

export default ListCard;
