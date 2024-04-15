import Card from 'src/components/card';
import css from './list-card.module.scss';
import { NavLink } from 'react-router-dom';
import Pill, { pillTypes } from 'src/components/pill';
import { GoPlus } from 'react-icons/go';
import Dropdown from './dropdown';
import Button2, { button2Type } from 'src/components/button-2';
import { FaWallet } from 'react-icons/fa6';
import { convertBnbToUsd, getTimeAgo } from 'src/utils';
import PropTypes from 'prop-types';
import { searchType } from 'src/constants';

const ListCard = function (props) {
	const {
		type,
		content,
		bnbToUsd
	} = props;

	const renderBnbValue = () => {
		return type === searchType.addressContract ? 'invisible' : '';
	}

	const renderMoreInfo = () => {
		switch (type) {
			case searchType.addressEoa:
				return (
					<>
						<div className={css.listCard__record}>
							<div className={css.listCard__record__title}>
								PRIVATE NAME TAGS
							</div>
							<div className={css.listCard__record__content}>
								<Pill
									type={pillTypes.white}
									className={css.listCard__Pillcustom}
								>
									<GoPlus />
									Add
								</Pill>
							</div>
						</div>
						<div className={css.listCard__record}>
							<div className={css.listCard__record__title}>
								LAST TXN SENT
							</div>
							<div className={css.listCard__record__content}>
								<NavLink className={`--link-no-underline`}>
									<div className={`${css['listCard--threeDot']}`}>
										{content?.lastTransaction?.blockHash}
									</div>
								</NavLink>
								{content?.lastTransaction?.timeStamp && getTimeAgo(content?.lastTransaction?.timeStamp)}
							</div>
						</div>
						<div className={css.listCard__record}>
							<div className={css.listCard__record__title}>
								FIRST TXN SENT
							</div>
							<div className={css.listCard__record__content}>
								<NavLink className={`--link-no-underline`}>
									<div className={`${css['listCard--threeDot']}`}>
										{content?.firstTransaction?.blockHash}
									</div>
								</NavLink>
								{content?.firstTransaction?.timeStamp && getTimeAgo(content?.firstTransaction?.timeStamp)}
							</div>
						</div>
					</>
				)

			case searchType.addressContract:
				return (
					<>
						<div className={css.listCard__record}>
							<div className={css.listCard__record__title}>
								CONTRACT CREATOR:
							</div>
							<div className={css.listCard__record__content}>
								<NavLink className={`--link-no-underline`}>
									<div className={`${css['listCard--threeDot']}`}>
										{content?.lastTransaction?.blockHash}
									</div>
								</NavLink>
								{content?.lastTransaction?.timeStamp && getTimeAgo(content?.lastTransaction?.timeStamp)}
							</div>
						</div>
						<div className={css.listCard__record}>
							<div className={css.listCard__record__title}>
								TOKEN TRACKER
							</div>
							<div className={css.listCard__record__content}>
								<img src={`https://testnet.bscscan.com/assets/bsc/images/svg/empty-token.svg?v=24.4.1.0`} alt='bnb' />
								<div>
									{content?.tokenName} ({content?.tokenSymbol})
								</div>
							</div>
						</div>
					</>
				)

			default:
				break;
		}
	}

	return (
		<div className={css.listCard}>
			<Card className={css.listCard__card}>
				<div className={css.listCard__header}>Overview</div>
				<div className={css.listCard__record}>
					<div className={css.listCard__record__title}>
						BNB BALANCE
					</div>
					<div className={css.listCard__record__content}>
						<img
							src='https://bscscan.com/assets/bsc/images/svg/logos/token-light.svg?v=24.3.4.0'
							alt='bnb'
						/>
						{content?.convertedBalance} BNB
					</div>
				</div>
				<div className={`${css.listCard__record} ${renderBnbValue()}`}>
					<div className={css.listCard__record__title}>BNB VALUE</div>
					<div className={css.listCard__record__content}>
						${convertBnbToUsd(content?.convertedBalance, bnbToUsd)}{' '}
						(@ ${bnbToUsd}/BNB)
					</div>
				</div>
				<div className={`${css.listCard__record} ${renderBnbValue()}`}>
					<div className='flex items-center gap-1'>
						<Dropdown />
						<Button2
							type={button2Type.outline}
							classname={css.listCard__button}
						>
							<FaWallet />
						</Button2>
					</div>
				</div>
			</Card>
			<Card className={css.listCard__card}>
				<div className={css.listCard__header}>More Info</div>
				{renderMoreInfo()}
			</Card>
			<Card className={css.listCard__card}>
				<div className={css.listCard__header}>Sponsored</div>
				<div className={css.listCard__record}></div>
			</Card>
		</div>
	);
};

ListCard.propTypes = {
	type: PropTypes.oneOf(Object.values(searchType)),
	content: PropTypes.object,
	bnbToUsd: PropTypes.number
};

export default ListCard;
