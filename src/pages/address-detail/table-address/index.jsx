import ListTabs from 'src/components/list-tabs';
import css from './table-address.module.scss';
import { CiFilter } from 'react-icons/ci';
import Button2, { button2Type } from 'src/components/button-2';
import { useState } from 'react';
import Card from 'src/components/card';
import Table from 'src/components/table';
import { CiCircleQuestion } from 'react-icons/ci';
import Popover, {
	popoverPlacementType,
} from 'src/components/popover';
import { MdArrowRightAlt } from 'react-icons/md';
import { FaSortAmountDown } from 'react-icons/fa';
import { FaDownload } from 'react-icons/fa6';
import {
	Dropdown2,
	dropdown2Align,
	dropdown2TriggerType,
} from 'src/components/dropdown-2';
import { IoChevronDownOutline } from 'react-icons/io5';
import PillSquare, { pillSquareType } from 'src/components/pill-square';
import CopyButton from 'src/components/copy-button';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { FaCircle } from 'react-icons/fa';
import { FaRegCircle } from 'react-icons/fa';
import { CiCircleAlert } from 'react-icons/ci';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { GrArticle } from 'react-icons/gr';
import { exportExcel, formatNumber, formatTimestamp, getTimeAgo, shortenHashWithPrefix, shortenHashWithPrefixSuffix } from 'src/utils';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { headerTime, headerTimeDefault, headerTimePopup, headerTimePopupDefault, url, urlParams } from 'src/constants';

const TableAddress = function ({ dataInitial }) {
	//#region lấy thông tin từ props
	const {
		transactionsArray,
	} = dataInitial
	//#endregion

	//#region render render table
	const [headerTimeTitle, setHeaderTimeTitle] = useState(headerTimeDefault);
	const [headerTimeTitlePopup, setHeaderTimeTitlePopup] = useState(headerTimePopupDefault);
	const headerTimeClickHandle = () => {
		switch (headerTimeTitle) {
			case headerTime.dateTime:
				setHeaderTimeTitle(headerTime.age);
				setHeaderTimeTitlePopup(headerTimePopup.age)
				break;
			case headerTime.age:
				setHeaderTimeTitle(headerTime.dateTime);
				setHeaderTimeTitlePopup(headerTimePopup.dateTime)
				break;
			default:
				break;
		}
	}
	const listColTransaction = [
		{
			id: 2,
			header: `Transaction Hash`,
		},
		{
			id: 3,
			header: (
				<div className='flex items-center gap-1'>
					Method
					<Popover
						placement={popoverPlacementType.top}
						className='flex items-center'
						content={<div className='flex flex-col'>
							<span>
								Function executed based on decoded inpu data.
							</span>
							<span>
								For unidentified functions, method ID is displayed
							</span>
							<span>
								instead
							</span>
						</div>}
					>
						<CiCircleQuestion />
					</Popover>
				</div>
			),
		},
		{
			id: 4,
			header: `Block`,
		},
		{
			id: 5,
			header: (
				<Popover
					placement={popoverPlacementType.top}
					className={`--text-blue`}
					content={headerTimeTitlePopup}
				>
					<div onClick={headerTimeClickHandle}>
						{headerTimeTitle}
					</div>
				</Popover>
			),
		},
		{
			id: 6,
			header: `From`,
		},
		{
			id: 7,
			header: ``,
		},
		{
			id: 8,
			header: `To`,
		},
		{
			id: 9,
			header: `Value`,
		},
		{
			id: 10,
			header: (
				<Popover
					placement={popoverPlacementType.top}
					className={`--text-blue`}
					content={`(Gas Price * Gas Used by Txns) in BNB`}
				>
					Txn Fee
				</Popover>
			),
		},
	];
	const renderTimeColumn = (timestamp) => {
		switch (headerTimeTitle) {
			case headerTime.dateTime:
				return <Popover
					placement={popoverPlacementType.top}
					content={getTimeAgo(timestamp)}
				>
					{formatTimestamp(timestamp)}
				</Popover>
			case headerTime.age:
				return <Popover
					placement={popoverPlacementType.top}
					content={formatTimestamp(timestamp)}
				>
					{getTimeAgo(timestamp)}
				</Popover>
			default:
				break;
		}
	}
	const renderTransaction = (data) => {
		if (!data || data.length <= 0) {
			return;
		}
		const result = [];
		data.forEach((item) => {
			const obj = {
				id: item.hash,
				cols: [
					<Popover
						key={`${item.blockHash}-2`}
						placement={popoverPlacementType.right}
						content={item?.hash}
					>
						<NavLink
							to={url.transactionDetail.replace(urlParams.transactionNumber, item?.hash)}
							className={`--link-no-underline`}
						>
							{shortenHashWithPrefix(item?.hash)}
						</NavLink>
					</Popover>,
					<Popover
						key={`${item.blockHash}-3`}
						placement={popoverPlacementType.top}
						content={'Deposit'}
					>
						<PillSquare
							type={pillSquareType.normal}
							className={`--hover-yellow ${css.table__dash}`}
						>
							Deposite
						</PillSquare>
					</Popover>,
					<div key={`${item.blockHash}-4`}>{item?.blockNumber}</div>,
					renderTimeColumn(item?.timestamp)
					,
					<div key={`${item.blockHash}-6`} className='flex items-center'>
						<Popover
							placement={popoverPlacementType.top}
							content={item?.from}
							className={`--hover-yellow flex items-center`}
						>
							<div>{shortenHashWithPrefixSuffix(item?.from)}</div>
						</Popover>
						<CopyButton content={shortenHashWithPrefixSuffix(item?.from)} />
					</div>,
					<PillSquare key={`${item.blockHash}-7`} type={pillSquareType.yellow}>OUT</PillSquare>,
					<div key={`${item.blockHash}-7`} className='flex items-center gap-1'>
						<Popover
							placement={popoverPlacementType.top}
							className={`--hover-yellow flex items-center`}
							content={
								<div className='flex flex-col items-center justify-center'>
									<span>BSC: Validator Set</span>
									<span>{item?.to}</span>
								</div>
							}
						>
							<div className='flex items-center'>
								<IoDocumentTextOutline />
							</div>
							BSC: Validator Set
						</Popover>
						<CopyButton content={item?.to} />
					</div>,
					<div key={`${item.blockHash}-8`}>{formatNumber(item?.value)} BNB</div>,
					`0`,
				],
			};
			result.push(obj);
		});
		return result;
	};
	//#endregion

	//#region tabs 
	const listTab = [
		{
			id: 1,
			content: `Transactions`,
		},
		{
			id: 2,
			content: `Internal Transactions`,
		},
	];
	const [tabSelected, setTabSelected] = useState(listTab[0]);
	//#endregion

	//#region download 
	const downLoadPageClickHandle = () => {
		exportExcel(
			transactionsRef.current,
			'List Transaction',
			'List Transaction',
		);
	};
	//#endregion

	//#region dropdown filter
	const [dropdownFilterShow, setDropdownFilterShow] = useState(false);
	const listSearchItem = [
		{
			id: 1,
			content: (
				<div className='flex items-center gap-1'>
					<FaCircle />
					View Completed Txns
				</div>
			),
		},
		{
			id: 2,
			content: (
				<div className='flex items-center gap-1'>
					<FaRegCircle />
					View Pending Txns
				</div>
			),
		},
		{
			id: 3,
			content: (
				<Popover
					placement={popoverPlacementType.top}
					content={`Option not available for this address`}
				>
					<div className='flex items-center gap-1 --text-gray'>
						<CiCircleAlert />
						View Failed Txns
					</div>
				</Popover>
			),
			lineBot: true,
			allowItemHover: false,
		},
		{
			id: 4,
			content: (
				<div className='flex items-center gap-1'>
					<FaLongArrowAltRight />
					View Outgoing Txns
				</div>
			),
		},
		{
			id: 5,
			content: (
				<div className='flex items-center gap-1'>
					<FaLongArrowAltLeft />
					View Incoming Txns
				</div>
			),
		},
		{
			id: 6,
			content: (
				<div className='flex items-center gap-1'>
					<GrArticle />
					View Contract Creation
				</div>
			),
		},
	];
	const dropdownFilterToggle = () => setDropdownFilterShow((state) => !state);
	//#endregion

	return (
		<div className={css.table}>
			<div className={css.table__listTab}>
				<div>
					<ListTabs
						list={listTab}
						selectedItem={tabSelected}
						setSelectedItem={setTabSelected}
					/>
				</div>
				<div>
					<Button2 type={button2Type.outlineSmall}>
						<CiFilter />
						Advanced Filter
					</Button2>
				</div>
			</div>
			<Card className={css.table__card}>
				<div className={css.table__header}>
					<div className={css.table__header__left}>
						<FaSortAmountDown />
						Latest 25 from a total of{' '}
						<Popover
							placement={popoverPlacementType.top}
							content={`Click to view full list`}
							className={`--text-blue`}
						>
							808,100
						</Popover>{' '}
						transactions
					</div>
					<div className={css.table__header__right}>
						<Button2
							onClick={downLoadPageClickHandle}
							type={button2Type.outlineSmall}
						>
							<FaDownload />
							<span style={{ whiteSpace: 'nowrap' }}>
								Download Page Data
							</span>
						</Button2>
						<Dropdown2
							list={listSearchItem}
							header={
								<Button2
									classname={`py-1`}
									type={button2Type.outlineSmall}
									onClick={dropdownFilterToggle}
								>
									<CiFilter />
									<IoChevronDownOutline />
								</Button2>
							}
							trigger={dropdown2TriggerType.runtime}
							show={dropdownFilterShow}
							align={dropdown2Align.right}
						/>
					</div>
				</div>
				<div>
					<Table
						listCol={listColTransaction}
						showFooter={false}
						headerLeftContent={false}
						showPagingTop={false}
						listRecord={renderTransaction(transactionsArray)}
					/>
				</div>
				<div className={css.table__footer}>
					View all transactions
					<MdArrowRightAlt />
				</div>
			</Card>
		</div>
	);
};

TableAddress.propTypes = {
	dataInitial: PropTypes.object,
}

export default TableAddress;
