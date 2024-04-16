import PropTypes from 'prop-types';
import Card from 'src/components/card';
import css from '../list-card.module.scss'
import Popover, { popoverPlacementType } from 'src/components/popover';
import { formatNumber } from 'src/utils';
import { FaInfoCircle } from "react-icons/fa";
import { FaRegQuestionCircle } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import { url, urlParams } from 'src/constants';
import CopyButton from 'src/components/copy-button';

function Token(props) {
	const {
		content
	} = props;
	return (
		<>
			<Card className={css.listCard__card}>
				<div className={css.listCard__header}>
					Overview
				</div>
				<div className={css.listCard__record}>
					<div className={css.listCard__record__title}>
						<Popover
							placement={popoverPlacementType.top}
							content={`Maximum Total Supply`}
						>
							MAX TOTAL SUPPLY
						</Popover>
					</div>
					<div className={css.listCard__record__content}>
						<Popover
							placement={popoverPlacementType.top}
							content={content?.totalSupply}
						>
							{formatNumber(content?.totalSupply)}
						</Popover>
						<span className='--light-bold'>
							{content?.tokenSymbol}
						</span>
					</div>
				</div>
				<div className={`${css.listCard__record}`}>
					<div className={css.listCard__record__title}>
						HOLDERS
					</div>
					<div className={css.listCard__record__content}>
						--
					</div>
				</div>
				<div className={`${css.listCard__record}`}>
					<div className={css.listCard__record__title}>
						TOTAL TRANSFERS
					</div>
					<div className={css.listCard__record__content}>
						<div>
							--
						</div>
						<Popover
							placement={popoverPlacementType.top}
							content={<div className='flex flex-col justify-center'>
								<div>
									This count of token transfers is updated every few hours
								</div>
								<div>
									instead of in real-time
								</div>
							</div>}
						>
							<FaInfoCircle />
						</Popover>
					</div>
				</div>
			</Card>
			<Card className={css.listCard__card}>
				<div className={css.listCard__header}>
					Market
				</div>
				<div className={css.listCard__record}>
					<div className={css.listCard__record__title}>
						<Popover
							placement={popoverPlacementType.top}
							content={`Price per token`}
						>
							PRICE
						</Popover>
					</div>
					<div className={css.listCard__record__content}>
						<Popover
							placement={popoverPlacementType.top}
							content={`$--`}
						>
							$--
						</Popover>
						<div className='--text-gray'>
							@ -- BNB
						</div>
					</div>
				</div>
				<div className={css.listCard__record}>
					<div className={`${css.listCard__record__title} flex items-center gap-1`}>
						ONCHAIN MARKET CAP
						<Popover
							placement={popoverPlacementType.top}
							content={`Price per token`}
						>

							<div className='flex items-center'>
								<FaRegQuestionCircle />
							</div>
						</Popover>
					</div>
					<div className={css.listCard__record__content}>
						$--
					</div>
				</div>
				<div className={css.listCard__record}>
					<div className={`${css.listCard__record__title}`}>
						CIRCULATING SUPPLY MARKET CAP
					</div>
					<div className={css.listCard__record__content}>
						--
					</div>
				</div>
			</Card>
			<Card className={css.listCard__card}>
				<div className={css.listCard__header}>
					Other Info
				</div>
				<div className={css.listCard__record}>
					<div className={css.listCard__record__title}>
						TOKEN CONTRACT (WITH <span className='--light-bold'>18</span> DECIMALS)
					</div>
					<div className={`${css.listCard__record__content} flex-wrap`}>
						<div className='flex items-center'>
							<IoDocumentTextOutline />
						</div>
						<Popover
							placement={popoverPlacementType.top}
							content={content?.address}
						>
							<NavLink
								to={url.addressDetail.replace(urlParams.addressNumber, content?.address)}
								className={`--link-no-underline`}
							>
								{content?.address}
							</NavLink>
						</Popover>
						<CopyButton content={content?.address} />
					</div>
				</div>
			</Card>
		</>
	)
}

Token.propTypes = {
	content: PropTypes.object
}

export default Token;
