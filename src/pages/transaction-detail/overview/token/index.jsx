import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Popover, { popoverPlacementType } from 'src/components/popover';
import css from './token.module.scss';
import { url, urlParams } from 'src/constants';

function Token(props) {
	const {
		to,
		tokenName,
		tokenSymbol
	} = props;
	return (
		<NavLink
			to={url.token.replace(urlParams.tokenNumber, to)}
			className='--hover-yellow flex items-center gap-1 hover-p --link-no-underline py-1'
		>
			<img
				src="https://testnet.bscscan.com/assets/bsc/images/svg/empty-token.svg?v=24.4.1.0"
				alt="bnb"
				className={css.img}
			/>
			<Popover
				placement={popoverPlacementType.top}
				content={to}
			>

				{tokenName}
			</Popover>
			<Popover
				placement={popoverPlacementType.top}
				content={to}
			>
				{tokenSymbol}
			</Popover>

		</NavLink >
	)
}

Token.propTypes = {
	to: PropTypes.string,
	tokenName: PropTypes.string,
	tokenSymbol: PropTypes.string
}

export default Token
