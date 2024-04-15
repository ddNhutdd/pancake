import Popover, { popoverPlacementType } from 'src/components/popover';
import css from './log-record.module.scss';
import CopyButton from 'src/components/copy-button';
import {
	Dropdown2,
	dropdown2Align,
	dropdown2TriggerType,
} from 'src/components/dropdown-2';
import { useState } from 'react';
import { GrSearch } from 'react-icons/gr';
import { FaAngleDown } from 'react-icons/fa6';
import PillSquare, { pillSquareType } from 'src/components/pill-square';
import { CiFilter } from 'react-icons/ci';
import Input from './input';
import PropTypes from 'prop-types'
import { formatNumber, shortenHashWithPrefixSuffix } from 'src/utils';
import { url, urlParams } from 'src/constants';
import { NavLink } from 'react-router-dom';


const LogRecord = function (props) {
	const {
		content,
		index
	} = props;
	content;
	const addressDropdownList = [
		{
			id: 1,
			content: (
				<>
					<CiFilter />
					Matches Topic0 (Advanced Filter)
				</>
			),
		},
	];

	const [showAddressDropdown, setShowAddressDropdown] = useState();

	const toggleAddressDropdown = () => {
		setShowAddressDropdown((state) => !state);
	};
	const addressDropdownChangeHandle = () => {
		setShowAddressDropdown(false);
	};
	const renderTopics = (topics) => {
		return topics.map((address, index) => {
			switch (index) {
				case 0:
					return (
						<div
							key={index}
							style={{ flexWrap: 'wrap' }}
							className='flex items-center gap-1'
						>
							<PillSquare type={pillSquareType.normal}>0</PillSquare>
							<div className={css['logRecord--wordBreak']}>
								{address}
							</div>
						</div>
					)
				case 1:
					return (
						<div
							key={index}
							style={{ flexWrap: 'wrap' }}
							className='flex items-center gap-1'
						>
							<PillSquare type={pillSquareType.normal}>1: from</PillSquare>
							<div className={css['logRecord--wordBreak']}>
								<NavLink
									to={url.addressDetail.replace(urlParams.addressNumber, address)}
									className={`--hover-yellow --link-no-underline`}
								>
									{address}
								</NavLink>
							</div>
						</div>
					)
				case 2:
					return (
						<div
							key={index}
							style={{ flexWrap: 'wrap' }}
							className='flex items-center gap-1'
						>
							<PillSquare type={pillSquareType.normal}>2: to</PillSquare>
							<div className={css['logRecord--wordBreak']}>
								<NavLink
									to={url.addressDetail.replace(urlParams.addressNumber, address)}
									className={`--hover-yellow --link-no-underline`}
								>
									{address}
								</NavLink>
							</div>
						</div>
					)

				default:
					break;
			}

		})
	};



	return (
		<div className={css.logRecord}>
			<div className={css.logRecord__left}>
				<div className={css.logRecord__circle}>{index}</div>
			</div>
			<div className={css.logRecord__right}>
				<div className={css.logRecord__row}>
					<div
						className={`${css.logRecord__row__left} ${css['logRecord--black']}`}
					>
						Address
					</div>
					<div
						style={{ flexWrap: 'wrap' }}
						className={css.logRecord__row__right}
					>
						<Popover
							placement={popoverPlacementType.top}
							content={
								<div className='flex items-center flex-col'>
									<span>BSC: System Reward</span>
									<span>({content.address})</span>
								</div>
							}
							className={`--text-blue --hover-yellow ${css.logRecord__address_popover}`}
						>
							{shortenHashWithPrefixSuffix(content?.address)}
						</Popover>
						<CopyButton content={content.address} />
						<div>
							<Dropdown2
								trigger={dropdown2TriggerType.runtime}
								list={addressDropdownList}
								show={showAddressDropdown}
								header={
									<div
										className={
											css.logRecord__address__dropdownHeader
										}
										onClick={toggleAddressDropdown}
									>
										<GrSearch />
										<FaAngleDown />
									</div>
								}
								onChange={addressDropdownChangeHandle}
								align={dropdown2Align.right}
							/>
						</div>
					</div>
				</div>
				<div className={css.logRecord__row}>
					<div className={css.logRecord__row__left}>Name</div>
					<div
						style={{ flexWrap: 'wrap' }}
						className={`${css.logRecord__row__right} ${`--text-gray`}`}
					>
						<div>receiveDeposit (index_topic_1</div>
						<div className='--text-success'>address</div>
						<div className='--text-danger flex'>
							from
							<div className='--text-gray'>,</div>
						</div>
						<div className='--text-success'>uint256</div>
						<div className='--text-danger'>amount</div>
						<div>)</div>
						<Popover
							placement={popoverPlacementType.top}
							content={`View source code`}
							className={`--text-blue`}
						>
							View Source
						</Popover>
					</div>
				</div>
				<div className={css.logRecord__row}>
					<div className={css.logRecord__row__left}>Topics</div>
					<div
						style={{
							flexDirection: 'column',
							alignItems: 'flex-start',
						}}
						className={css.logRecord__row__right}
					>
						{renderTopics(content.topics)}
					</div>
				</div>
				<div className={css.logRecord__row}>
					<div className={css.logRecord__row__left}>Data</div>
					<div className={css.logRecord__row__right}>
						<Input value={
							<div>
								<span className={css.logRecord__address__data}>amount: </span>
								<span>{formatNumber(content?.data).replaceAll(',', '')}</span>
							</div>
						} />
					</div>
				</div>
			</div>
		</div>
	);
};

LogRecord.propTypes = {
	content: PropTypes.object,
	index: PropTypes.number
}

export default LogRecord;

