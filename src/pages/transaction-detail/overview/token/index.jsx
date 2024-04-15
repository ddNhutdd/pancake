import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Popover, { popoverPlacementType } from 'src/components/popover';
import css from './token.module.scss';

function Token(props) {
	const {
		to,
		tokenName,
		tokenSymbol

	} = props;
	return (
		<div className='--hover-yellow flex items-center gap-1 hover-p'>
			<img
				src="https://testnet.bscscan.com/assets/bsc/images/svg/empty-token.svg?v=24.4.1.0"
				alt="bnb"
				className={css.img}
			/>
			<Popover
				placement={popoverPlacementType.top}
				content={to}
			>
				(<NavLink

					className={`--link-no-underline`}
				>
					{tokenName}
				</NavLink>)
			</Popover>
			<Popover
				placement={popoverPlacementType.top}
				content={to}
			>
				{tokenSymbol}
			</Popover>

		</div>
	)
}

Token.propTypes = {
	to: PropTypes.string,
	tokenName: PropTypes.string,
	tokenSymbol: PropTypes.string
}

export default Token
